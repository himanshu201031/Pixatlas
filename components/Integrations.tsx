import React from 'react';
import { Section } from './ui/Section';
import { motion, Variants } from 'framer-motion';
import { RevealCardContainer, IdentityCardBody } from './ui/animated-card';
import { ArrowUpRight } from 'lucide-react';

// Brand Icons
const WordPressIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.049 0C5.394 0 0 5.394 0 12.049c0 5.308 3.437 9.805 8.204 11.417-.114-.97-.216-2.464.045-3.525.234-.954 1.513-6.406 1.513-6.406s-.377-.754-.377-1.867c0-1.75 1.015-3.057 2.278-3.057 1.075 0 1.594.807 1.594 1.774 0 1.082-.689 2.698-1.045 4.197-.297 1.256.63 2.28 1.868 2.28 2.242 0 3.966-2.364 3.966-5.772 0-3.016-2.168-5.12-5.264-5.12-3.834 0-6.085 2.876-6.085 5.848 0 1.158.446 2.402 1.003 3.076.11.134.126.252.093.388-.1.42-.325 1.32-.369 1.504-.058.245-.195.297-.45.179-1.68-1.783-2.73-5.38-2.73-8.66 0-6.454 4.693-12.378 13.535-12.378 7.108 0 12.634 5.066 12.634 11.84 0 7.066-4.456 12.75-10.64 12.75-2.077 0-4.028-1.079-4.696-2.353l-1.337 5.09c-.482 1.84-1.79 4.145-2.668 5.552 2.004.594 4.13.916 6.335.916 6.655 0 12.049-5.394 12.049-12.049S18.704 0 12.049 0z" />
    </svg>
);

const TrelloIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M19.3 0H4.7C2.1 0 0 2.1 0 4.7v14.6C0 21.9 2.1 24 4.7 24h14.6c2.6 0 4.7-2.1 4.7-4.7V4.7C24 2.1 21.9 0 19.3 0zM10.6 18.9c0 .8-.6 1.4-1.4 1.4H6.1c-.8 0-1.4-.6-1.4-1.4V4.5c0-.8.6-1.4 1.4-1.4h3.1c.8 0 1.4.6 1.4 1.4v14.4zm8.7-5.3c0 .8-.6 1.4-1.4 1.4h-3.1c-.8 0-1.4-.6-1.4-1.4V4.5c0-.8.6-1.4 1.4-1.4h3.1c.8 0 1.4.6 1.4 1.4v9.1z" />
    </svg>
);

const SlackIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.522-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.522-2.522v-2.522h2.522zM15.165 17.688a2.527 2.527 0 0 1-2.522-2.522 2.527 2.527 0 0 1 2.522-2.522h6.312A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.522h-6.313z" />
    </svg>
);

const AsanaIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.6 14.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4m5.2-5.5c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4m-10.4 8.2c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4" />
    </svg>
);

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
);

const tools = [
    {
        id: 'wordpress',
        name: 'WordPress',
        desc: 'Powering 40% of the web. Integrate seamless CMS capabilities directly.',
        icon: <WordPressIcon />,
        category: 'CMS',
        avatarText: 'WP'
    },
    {
        id: 'trello',
        name: 'Trello',
        desc: 'Kanban-style project management for teams to organize tasks efficiently.',
        icon: <TrelloIcon />,
        category: 'Productivity',
        avatarText: 'TR'
    },
    {
        id: 'slack',
        name: 'Slack',
        desc: 'Real-time messaging, archiving and search for modern teams.',
        icon: <SlackIcon />,
        category: 'Communication',
        avatarText: 'SL'
    },
    {
        id: 'asana',
        name: 'Asana',
        desc: 'Work management platform to help teams stay on track and hit goals.',
        icon: <AsanaIcon />,
        category: 'Management',
        avatarText: 'AS'
    },
    {
        id: 'google',
        name: 'Google',
        desc: 'Seamlessly connect with Drive, Docs, and Sheets for unified workflow.',
        icon: <GoogleIcon />,
        category: 'Suite',
        avatarText: 'GO'
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 12
        }
    },
};

export const Integrations = () => {
    return (
        <Section className="bg-[#080808] relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="text-center mb-12 md:mb-16 relative z-10 px-4">
                <span className="text-accent uppercase text-xs md:text-sm font-medium tracking-wider mb-2 block">★ Our Ecosystem</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight leading-tight">
                    Seamless integration, <br /> connecting <span className="text-accent">all your tools</span>
                </h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6"
            >
                {tools.map((tool) => (
                    <motion.div
                        key={tool.id}
                        variants={itemVariants}
                        className="h-full"
                    >
                        <RevealCardContainer
                            accent="#ccff00"
                            className="h-[300px] md:h-[380px]"
                            base={
                                <IdentityCardBody
                                    fullName={tool.name}
                                    place={tool.category}
                                    about="Hover to reveal integration details and connect your account."
                                    avatarText={tool.avatarText}
                                    icon={tool.icon}
                                    scheme="plain"
                                    displayAvatar={true}
                                />
                            }
                            overlay={
                                <IdentityCardBody
                                    fullName={tool.name}
                                    place={tool.category}
                                    about={tool.desc}
                                    avatarText={tool.avatarText}
                                    icon={tool.icon}
                                    scheme="accented"
                                    displayAvatar={true}
                                    cardCss={{ backgroundColor: "#ccff00" }}
                                    socials={[
                                        {
                                            id: 'link',
                                            url: '#',
                                            label: 'Connect',
                                            icon: <div className="flex items-center gap-2 font-bold text-black border-b border-black pb-1">Connect <ArrowUpRight size={16} /></div>
                                        }
                                    ]}
                                />
                            }
                        />
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};