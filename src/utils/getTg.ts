const tg = window.Telegram.WebApp;

export function getTg(){
    const onClose = () => {
        tg.close()
    }

    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}