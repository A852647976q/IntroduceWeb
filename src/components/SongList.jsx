import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Plus, Youtube, ExternalLink, Trash2 } from 'lucide-react';

export default function SongList() {
    const [songs, setSongs] = useState([
        { id: 1, title: '最推薦的歌：Perfect - Ed Sheeran', url: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g' },
        { id: 2, title: 'Example Song 2', url: 'https://youtube.com' }
    ]);
    const [newTitle, setNewTitle] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    const addSong = (e) => {
        e.preventDefault();
        if (!newTitle) return;

        setSongs([...songs, { id: Date.now(), title: newTitle, url: newUrl }]);
        setNewTitle('');
        setNewUrl('');
        setIsAdding(false);
    };

    const removeSong = (id) => {
        setSongs(songs.filter(s => s.id !== id));
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card"
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    <Music className="gradient-text" />
                    <span className="gradient-text">近期推薦歌單</span>
                </h2>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        transition: '0.2s'
                    }}
                    className="hover-bg"
                >
                    <Plus size={18} style={{ transform: isAdding ? 'rotate(45deg)' : 'rotate(0)', transition: '0.3s' }} />
                </button>
            </div>

            {isAdding && (
                <motion.form
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    onSubmit={addSong}
                    style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                >
                    <input
                        placeholder="歌曲標題"
                        value={newTitle}
                        onChange={e => setNewTitle(e.target.value)}
                    />
                    <input
                        placeholder="YouTube 連結"
                        value={newUrl}
                        onChange={e => setNewUrl(e.target.value)}
                    />
                    <button
                        type="submit"
                        style={{
                            background: 'var(--primary)',
                            color: 'white',
                            padding: '0.5rem',
                            borderRadius: '8px',
                            marginTop: '0.5rem'
                        }}
                    >
                        新增歌曲
                    </button>
                </motion.form>
            )}

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {songs.map((song, index) => {
                    const isTopPick = index === 0;
                    return (
                        <motion.li
                            key={song.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                padding: '1rem',
                                background: isTopPick ? 'linear-gradient(90deg, rgba(139, 92, 246, 0.2), transparent)' : 'rgba(255,255,255,0.03)',
                                borderLeft: isTopPick ? '4px solid #facc15' : '4px solid transparent',
                                marginBottom: '0.8rem',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                border: isTopPick ? '1px solid rgba(250, 204, 21, 0.3)' : 'none'
                            }}
                        >
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                                    {isTopPick && <span style={{ fontSize: '0.8rem', background: '#facc15', color: 'black', padding: '0.1rem 0.4rem', borderRadius: '4px', fontWeight: 'bold' }}>TOP 1</span>}
                                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{song.title}</span>
                                </div>
                                {song.url && (
                                    <a
                                        href={song.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#ec4899', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem', textDecoration: 'none' }}
                                    >
                                        <Youtube size={14} /> 觀看影片 <ExternalLink size={12} />
                                    </a>
                                )}
                            </div>

                            <button
                                onClick={() => removeSong(song.id)}
                                style={{ color: '#52525b', background: 'transparent' }}
                                title="刪除"
                            >
                                <Trash2 size={16} />
                            </button>
                        </motion.li>
                    );
                })}
            </ul>
        </motion.div>
    );
}
