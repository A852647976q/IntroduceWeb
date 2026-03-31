import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Palette } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card flex flex-col items-center text-center space-y-4"
      style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
    >
      <div style={{ position: 'relative' }}>
         <div className="avatar-glow" style={{
            width: '120px', height: '120px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '1rem', boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
         }}>
            <span style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>江</span>
         </div>
      </div>
      
      <h1 className="gradient-text" style={{ fontSize: '2.5rem', margin: 0, fontWeight: 700 }}>
        江芮菁
      </h1>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          style={{ background: 'rgba(255,255,255,0.1)', padding: '0.8rem 1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Sparkles size={18} color="#ec4899" />
          <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>我的個性</span>
          <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>內向</span>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          style={{ background: 'rgba(255,255,255,0.1)', padding: '0.8rem 1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <div style={{ display: 'flex', gap: '0.3rem' }}>
             <Camera size={18} color="#8b5cf6" />
             <Palette size={18} color="#8b5cf6" />
          </div>
          <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>我的興趣</span>
          <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>拍照、畫畫</span>
        </motion.div>
      </div>
    </motion.header>
  );
}
