import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const Home = () => {
    const playerRef = useRef(null); // Tham chiếu đến trình phát video
    const [playing, setPlaying] = useState(false); // Trạng thái phát/dừng
    const [currentTime, setCurrentTime] = useState(0); // Thời gian hiện tại
    const [duration, setDuration] = useState(0); // Tổng thời gian video

    // Xử lý sự kiện Play/Pause
    const togglePlayPause = () => {
        setPlaying((prev) => !prev);
    };

    // Xử lý sự kiện Stop
    const handleStop = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(0, 'seconds'); // Quay lại thời gian bắt đầu
        }
        setPlaying(false); // Tạm dừng video
        setCurrentTime(0); // Reset thời gian hiện tại
    };

    // Theo dõi tiến trình phát video
    const handleProgress = (progress) => {
        setCurrentTime(progress.playedSeconds);
    };

    // Định dạng thời gian thành mm:ss
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
            <ReactPlayer
                ref={playerRef}
                url="http://hcm-02.storage.vnptcdn.com:9000/rickkei1288/2024-11-16%2015-08-02.mp4"
                playing={playing} // Điều khiển trạng thái phát/dừng
                controls={false} // Tắt thanh điều khiển mặc định
                onProgress={handleProgress} // Theo dõi tiến trình
                onDuration={(duration) => setDuration(duration)} // Lấy tổng thời gian video
                width="100%"
                height="360px"
            />

            {/* Các nút điều khiển */}
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {/* Nút Play/Pause */}
                <button
                    onClick={togglePlayPause}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    {playing ? 'Pause' : 'Play'}
                </button>

                {/* Nút Stop */}
                <button
                    onClick={handleStop}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Stop
                </button>
            </div>

            {/* Thanh thời gian */}
            <div style={{ marginTop: '10px' }}>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    step="0.1"
                    value={currentTime}
                    onChange={(e) => {
                        const newTime = parseFloat(e.target.value);
                        if (newTime <= currentTime && playerRef.current) {
                            playerRef.current.seekTo(newTime, 'seconds'); // Cho phép tua lùi
                        }
                    }}
                    style={{ width: '100%' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
