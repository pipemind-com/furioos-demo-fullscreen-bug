import styles from '../styles/Home.module.css'
import { Player } from 'furioos-sdk';
import { useState, useEffect } from 'react';
import { Button } from 'antd'
import { FullscreenOutlined } from '@ant-design/icons'

const options = {
  whiteLabel: true,
  hideToolbar: false,
  hideTitle: true,
  hidePlayButton: false,
};

export default function Home() {
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    const p = new Player("211.553", "furioos_container", options);
    setPlayer(p);
  }, [])

  const onClickWorking = () => {
    const container = document.getElementById('furioos_container');
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  const onClickNotWorking = () => {
    player.maximize()
  }

  return (
    <div className={styles.container}>
      <Button type="primary" icon={<FullscreenOutlined />} size="large" onClick={onClickNotWorking}>
        Fullscreen (not working)
      </Button>

      <Button type="primary" icon={<FullscreenOutlined />} size="large" onClick={onClickWorking}>
        Fullscreen (working)
      </Button>
      <div
        id="furioos_container" />
    </div>
  )
}
