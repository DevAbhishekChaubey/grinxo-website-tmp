"use client";

import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/lib/wa";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppIcon, MenuIcon, CloseIcon } from "@/components/ui/Icons";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    const handleMobileLinkClick = useCallback(() => {
        closeMenu();
    }, [closeMenu]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeMenu();
            }
        };

        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, closeMenu]);

    return (
        <header className="sticky top-0 z-50 bg-[#764897]">
            <div className="wrap nav relative z-50">
                <Link href="#top" className="logo" aria-label="GrinXO Logo" style={{ display: "flex", alignItems: "center" }} onClick={closeMenu}>
                    <Image src="/assets/logo.png" alt="GrinXO Logo" width={220} height={53} style={{ objectFit: 'contain' }} priority />
                </Link>
                <nav className="nav-links">
                    <Link href="#bring">What we do</Link>
                    <Link href="#how">How it works</Link>
                    <Link href="#experiences">Experiences</Link>
                    <Link href="#why">Why GrinXO</Link>
                </nav>
                <a className="nav-cta" href={waLink} target="_blank" rel="noopener">
                    <WhatsAppIcon width={17} height={17} />
                    +917303337001
                </a>
                <button className="menu-btn" id="menuBtn" aria-label="Toggle menu" onClick={toggleMenu}>
                    {isOpen ? (
                        <CloseIcon width={28} height={28} />
                    ) : (
                        <MenuIcon width={28} height={28} />
                    )}
                </button>
            </div>
            
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={closeMenu}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 40
                            }}
                        />
                        <motion.div 
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.2 }}
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                width: '100%',
                                backgroundColor: '#764897',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '16px 0 32px',
                                gap: '8px',
                                overflow: 'hidden',
                                borderTop: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
                                zIndex: 45
                            }}
                        >
                            <Link href="#bring" onClick={handleMobileLinkClick} style={{ color: '#fff', fontSize: '18px', fontWeight: 500, padding: '12px 16px', display: 'block', width: '100%', textAlign: 'center' }}>What we do</Link>
                            <Link href="#how" onClick={handleMobileLinkClick} style={{ color: '#fff', fontSize: '18px', fontWeight: 500, padding: '12px 16px', display: 'block', width: '100%', textAlign: 'center' }}>How it works</Link>
                            <Link href="#experiences" onClick={handleMobileLinkClick} style={{ color: '#fff', fontSize: '18px', fontWeight: 500, padding: '12px 16px', display: 'block', width: '100%', textAlign: 'center' }}>Experiences</Link>
                            <Link href="#why" onClick={handleMobileLinkClick} style={{ color: '#fff', fontSize: '18px', fontWeight: 500, padding: '12px 16px', display: 'block', width: '100%', textAlign: 'center' }}>Why GrinXO</Link>
                            <div style={{ padding: '8px 0', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <a href={waLink} onClick={() => closeMenu()} target="_blank" rel="noopener" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    backgroundColor: '#fff',
                                    color: '#764897',
                                    padding: '12px 24px',
                                    borderRadius: '999px',
                                    fontWeight: 600,
                                }}>
                                    <WhatsAppIcon width={20} height={20} style={{ flex: 'none' }} />
                                    +91 73033 37001
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
