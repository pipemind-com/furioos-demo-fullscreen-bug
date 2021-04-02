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
    const p = new Player("422.037", "furioos_container", options);
    setPlayer(p);
  }, [])
  return (
    <div className={styles.container}>
      <Button type="primary" icon={<FullscreenOutlined />} size="large" onClick={() => player.maximize()}>
        Fullscreen
      </Button>
      <div
        id="furioos_container" />
    </div>
  )
}
