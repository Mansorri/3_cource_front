
import React from "react";
import GoodsCard from "./GoodsCard";

const goods = [
    {
        id: 1,
        name: "Навушники",
        price: 1499,
        image: "/goods/headphones.jpg"
    },
    {
        id: 2,
        name: "Смартгодинник",
        price: 2299,
        image: "/goods/watch.jpg"
    },
    {
        id: 3,
        name: "Колонка",
        price: 999,
        image: "/goods/speaker.jpg"
    },
    {
        id: 4,
        name: "Клавіатура",
        price: 1799,
        image: "/goods/keyboard.jpg"
    },
    {
        id: 5,
        name: "Комп'ютерна миша",
        price: 799,
        image: "/goods/mouse.jpg"
    },
    {
        id: 6,
        name: "Вебкамера",
        price: 1299,
        image: "/goods/webcam.jpg"
    }
];

function GoodsGallery() {
    return (
        <section className="goods-section">
            <h2>Завдання 2. Галерея товарів</h2>

            <div className="goods-grid">
                {goods.map((item) => (
                    <GoodsCard
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </section>
    );
}

export default GoodsGallery;
