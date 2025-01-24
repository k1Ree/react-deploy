import React from "react";

const ShareButton= () => {
  const shareData = {
    title: "Полезная статья",
    text: "Посмотри эту интересную статью!",
    url: window.location.href, // Использует текущий URL
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Информация успешно отправлена!");
      } catch (error) {
        console.error("Ошибка при отправке:", error);
      }
    } else {
      alert("Ваш браузер не поддерживает Web Share API");
    }
  };

  return (
    <button onClick={handleShare} style={{ padding: "10px", fontSize: "16px" }}>
      🔗 Поделиться
    </button>
  );
};

export default ShareButton;