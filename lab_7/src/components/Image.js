
import React, { useState } from "react";

function Image() {
    const [images, setImages] = useState([
        { id: 1, size: 350 }
    ]);

    const addImage = () => {
        setImages((prevImages) => [
            ...prevImages,
            { id: Date.now(), size: 350 }
        ]);
    };

    const increaseImage = (id) => {
        setImages((prevImages) =>
            prevImages.map((image) =>
                image.id === id
                    ? { ...image, size: image.size + 50 }
                    : image
            )
        );
    };

    const decreaseImage = (id) => {
        setImages((prevImages) =>
            prevImages.map((image) =>
                image.id === id
                    ? { ...image, size: Math.max(100, image.size - 50) }
                    : image
            )
        );
    };

    const resetImage = (id) => {
        setImages((prevImages) =>
            prevImages.map((image) =>
                image.id === id
                    ? { ...image, size: 350 }
                    : image
            )
        );
    };

    return (
        <section className="image-section">
            <h2>Робота із зображеннями</h2>

            <p>
                Керування зображеннями за допомогою React.
            </p>

            <button onClick={addImage}>
                Додати зображення
            </button>

            <div className="images-container">
                {images.map((image) => (
                    <div className="image-card" key={image.id}>
                        <img
                            src="/budapest.jpg"
                            alt="Будапешт"
                            style={{
                                width: `${image.size}px`,
                                maxWidth: "100%",
                                height: "auto"
                            }}
                        />

                        <div className="image-buttons">
                            <button onClick={() => increaseImage(image.id)}>
                                Збільшити
                            </button>

                            <button onClick={() => decreaseImage(image.id)}>
                                Зменшити
                            </button>

                            <button onClick={() => resetImage(image.id)}>
                                Відновити
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Image;
