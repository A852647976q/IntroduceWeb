import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImagePlus, Send, X } from 'lucide-react';

export default function PostCreator() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [imgPreview, setImgPreview] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImgPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title && !content && !image) return;

        const newPost = {
            id: Date.now(),
            title,
            content,
            imgPreview,
            date: new Date().toLocaleDateString()
        };

        setPosts([newPost, ...posts]);
        setTitle('');
        setContent('');
        setImage(null);
        setImgPreview('');
    };

    return (
        <div style={{ width: '100%' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card"
            >
                <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="gradient-text">分享生活G48</span>
                </h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input
                        type="text"
                        placeholder="輸入標題...?"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ fontSize: '1.2rem', fontWeight: 600 }}
                    />

                    <textarea
                        rows="4"
                        placeholder="寫下你的心情..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        style={{ resize: 'vertical' }}
                    />

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <label
                            style={{
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#a1a1aa',
                                padding: '0.5rem 1rem',
                                border: '1px dashed #a1a1aa',
                                borderRadius: '8px',
                                transition: '0.2s'
                            }}
                            className="hover-bg"
                        >
                            <ImagePlus size={20} />
                            <span>上傳照片</span>
                            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                        </label>

                        {imgPreview && (
                            <div style={{ position: 'relative', height: '50px', width: '50px' }}>
                                <img src={imgPreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                                <button
                                    type="button"
                                    onClick={() => { setImgPreview(''); setImage(null); }}
                                    style={{ position: 'absolute', top: -5, right: -5, background: 'red', borderRadius: '50%', padding: '2px', color: 'white', display: 'flex' }}
                                >
                                    <X size={10} />
                                </button>
                            </div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            style={{
                                marginLeft: 'auto',
                                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                                color: 'white',
                                padding: '0.6rem 2rem',
                                borderRadius: '8px',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <Send size={18} />
                            發布
                        </motion.button>
                    </div>
                </form>
            </motion.div>

            <div className="posts-feed" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <AnimatePresence>
                    {posts.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="glass-card"
                            style={{ padding: '1.5rem', marginBottom: 0 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{post.title}</h3>
                                <span style={{ color: '#a1a1aa', fontSize: '0.8rem' }}>{post.date}</span>
                            </div>

                            <p style={{ lineHeight: '1.6', color: '#e4e4e7', whiteSpace: 'pre-wrap', marginBottom: post.imgPreview ? '1rem' : 0 }}>
                                {post.content}
                            </p>

                            {post.imgPreview && (
                                <div style={{ borderRadius: '12px', overflow: 'hidden', marginTop: '1rem' }}>
                                    <img src={post.imgPreview} alt="Post" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}