import React from "react";

const ShareButton = () => {
  const handleShare = async () => {
if (navigator.share) {
  navigator.share({
    title: "Заголовок",
    text: "Тестовый текст",
    url: "https://example.com",
  })
  .then(() => console.log("Успешно поделились!"))
  .catch((error) => console.error("Ошибка:", error));
} else {
  console.log("Web Share API не поддерживается");
}
  };

  return <button onClick={handleShare}>📤 Поделиться</button>;
};

export default ShareButton;