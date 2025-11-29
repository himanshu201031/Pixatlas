"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { cn } from "../../lib/utils";
import React, { forwardRef, useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export type SocialItem = {
  id: string;
  url: string;
  icon: React.ReactNode;
  label: string;
};

export interface IdentityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  fullName: string;
  place: string;
  about: string;
  avatarUrl?: string;
  avatarText: string;
  icon?: React.ReactNode;
  scheme?: "plain" | "accented";
  socials?: SocialItem[];
  displayAvatar?: boolean;
  titleCss?: React.CSSProperties;
  cardCss?: React.CSSProperties;
  descClass?: string;
  bioClass?: string;
  footerClass?: string;
}

export const IdentityCardBody = forwardRef<HTMLDivElement, IdentityCardProps>(
  (
    {
      fullName,
      place,
      about,
      avatarUrl,
      avatarText,
      icon,
      scheme = "plain",
      socials = [],
      displayAvatar = true,
      titleCss,
      cardCss,
      descClass,
      bioClass,
      footerClass,
      className,
      ...rest
    },
    ref
  ) => {
    const isAccent = scheme === "accented";

    return (
      <Card
        ref={ref}
        style={cardCss}
        className={cn(
          "flex flex-col rounded-3xl border-0 p-6 md:p-8 h-full justify-between",
          isAccent
            ? "text-black"
            : "bg-white/5 text-card-foreground border-white/5",
          className
        )}
        {...rest}
      >
        <CardHeader className="p-0">
          <div className={cn("mb-4 md:mb-6", !displayAvatar && "invisible")}>
            <Avatar
              className="h-12 w-12 md:h-16 md:w-16 ring-2 ring-offset-4 ring-offset-[#0a0a0a]"
              style={
                {
                  "--tw-ring-color": isAccent ? "#000" : "#ccff00",
                } as React.CSSProperties
              }
            >
              <AvatarImage src={avatarUrl} />
              <AvatarFallback className={cn(isAccent ? "bg-black text-white" : "bg-white/10 text-white font-bold", "flex items-center justify-center p-3")}>
                {icon ? icon : avatarText}
              </AvatarFallback>
            </Avatar>
          </div>
          <CardDescription
            className={cn(
              "text-left font-medium text-xs md:text-sm",
              !isAccent && "text-gray-400",
              descClass
            )}
            style={isAccent ? { color: "rgba(0,0,0,0.6)" } : {}}
          >
            {place}
          </CardDescription>
          <CardTitle
            className="text-2xl md:text-3xl text-left font-bold tracking-tight mt-1"
            style={{
              ...(isAccent ? { color: "#000" } : { color: "#fff" }),
              ...titleCss,
            }}
          >
            {fullName}
          </CardTitle>
        </CardHeader>

        <CardContent className="mt-4 md:mt-6 flex-grow p-0">
          <p
            className={cn(
              "text-sm md:text-base leading-relaxed text-left",
              !isAccent && "text-gray-400",
              bioClass
            )}
            style={isAccent ? { opacity: 0.9, color: "#111" } : {}}
          >
            {about}
          </p>
        </CardContent>

        {socials.length > 0 && (
          <CardFooter className={cn("mt-4 md:mt-6 p-0", footerClass)}>
            <div
              className={cn(
                "flex items-center gap-4",
                !isAccent && "text-gray-400"
              )}
              style={
                isAccent
                  ? { color: "rgba(0,0,0,0.6)" }
                  : undefined
              }
            >
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "transition-opacity hover:scale-110",
                    isAccent ? "hover:opacity-75" : "hover:text-white"
                  )}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </CardFooter>
        )}
      </Card>
    );
  }
);
IdentityCardBody.displayName = "IdentityCardBody";

// ------------------ Animated Container ------------------

export interface RevealCardProps extends React.HTMLAttributes<HTMLDivElement> {
  base: React.ReactNode;
  overlay: React.ReactNode;
  accent?: string;
  textOnAccent?: string;
  mutedOnAccent?: string;
}

export const RevealCardContainer = forwardRef<HTMLDivElement, RevealCardProps>(
  (
    {
      base,
      overlay,
      accent = "#ccff00",
      textOnAccent = "#000",
      mutedOnAccent = "rgba(0,0,0,0.5)",
      className,
      ...rest
    },
    ref
  ) => {
    const holderRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const overlayMode = "dark";

    const assignRef = useCallback(
      (el: HTMLDivElement | null) => {
        holderRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
      },
      [ref]
    );

    const startClip = "circle(0px at 100% 100%)";
    const expandClip = "circle(160% at 100% 100%)";

    useGSAP(() => {
      gsap.set(overlayRef.current, { clipPath: startClip });
    }, { scope: holderRef });

    const reveal = () => {
      gsap.to(overlayRef.current, {
        clipPath: expandClip,
        duration: 0.6,
        ease: "power2.inOut",
      });
    };
    const conceal = () => {
      gsap.to(overlayRef.current, {
        clipPath: startClip,
        duration: 0.6,
        ease: "power2.inOut",
      });
    };

    return (
      <div
        ref={assignRef}
        onMouseEnter={reveal}
        onMouseLeave={conceal}
        // Mobile tap support: toggle reveal on tap can be complex without state, 
        // usually hover is treated as tap on mobile, which works for this effect.
        style={
          {
            "--accent-color": accent,
            "--on-accent-foreground": textOnAccent,
            "--on-accent-muted-foreground": mutedOnAccent,
          } as React.CSSProperties
        }
        className={cn(
          "relative w-full overflow-hidden rounded-3xl border border-white/5",
          className
        )}
        {...rest}
      >
        <div className="h-full w-full">{base}</div>
        <div
          ref={overlayRef}
          className={cn("absolute inset-0 h-full w-full bg-[#ccff00] z-20 pointer-events-none", overlayMode)}
        >
          {overlay}
        </div>
      </div>
    );
  }
);
RevealCardContainer.displayName = "RevealCardContainer";