import img1 from "../../../../assets/image/image_1.png";
import img2 from "../../../../assets/image/image_2.png";
import img3 from "../../../../assets/image/image_3.png";


export const propsProduct = [
    {
        id: 1,
        title: "Шампунь",
        img: img1,
        price: 200,
        newProduct: false,
        consist: "1 Інгредієнт, 2 Інгредієнт, 3 Інгредієнт, 4 Інгредієнт",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        colors: [ "Красный", "Желтый", "Зеленый", "Зеленый","Зеленый"],
        volumes: [
                {
                    text: "100 мл",
                    id: "radio1_id1",
                    checked: true
                },
                {
                    text: "200 мл",
                    id: "radio2_id1",
                    checked: false
                },
                {
                    text: "300 мл",
                    id: "radio3_id1",
                    checked: false
                },]
    },
    {
        id: 2,
        title: "Шампунь",
        img: img2,
        price: 200,
        newProduct: true,
        consist: "1 Інгредієнт, 2 Інгредієнт, 3 Інгредієнт, 4 Інгредієнт",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        colors: [ "Красный", "Желтый", "Зеленый", "Зеленый","Зеленый"],
        volumes: [
            {
                text: "100 мл",
                id: "radio1_id2",
                checked: true
            },
            {
                text: "200 мл",
                id: "radio2_id2",
                checked: false
            },
            {
                text: "300 мл",
                id: "radio3_id2",
                checked: false
            },]
    },
    {
        id: 3,
        title: "Шампунь",
        img: img3,
        price: 200,
        newProduct: true,
        consist: "1 Інгредієнт, 2 Інгредієнт, 3 Інгредієнт, 4 Інгредієнт",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        colors: [ "Красный", "Желтый", "Зеленый", "Зеленый","Зеленый"],
        volumes: [
            {
                text: "100 мл",
                id: "radio1_id3",
                checked: true
            },
            {
                text: "200 мл",
                id: "radio2_id3",
                checked: false
            },
            {
                text: "300 мл",
                id: "radio3_id3",
                checked: false
            },]
    }
]