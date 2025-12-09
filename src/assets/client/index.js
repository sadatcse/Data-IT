const images = import.meta.glob('./*.png', { eager: true });

export default Object.values(images).map((img) => img.default);