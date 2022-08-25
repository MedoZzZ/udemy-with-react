import React from "react";
import CourseMember from './CourseMember';

function Course() {
    const info = [
        {
            id: 1,
            title: "The Python and Django Learning Guide",
            instructor: "Hussin Fuliah",
            img:"https://img-c.udemycdn.com/course/240x135/2426532_a277_7.jpg",
            price: "E£1,399.99",
            students: 1432,
            stars: "4.6",
            bestSeller: true,
        },
        {
            id: 2,
            title: "The Complete Programming Fundamentals Course",
            instructor: "Abderrahmen Litprog",
            img:"https://img-c.udemycdn.com/course/240x135/4226056_5e40_3.jpg",
            price: "E£1,000.99",
            students: 985,
            stars: "4.6",
            bestSeller: false,
        },
        {
            id: 3,
            title: "Python For Beginners [in Arabic]",
            instructor: "ElAmir Mahmoud Mansour",
            img:"https://img-c.udemycdn.com/course/240x135/4230080_0693.jpg",
            price: "E£1,199.99",
            students: 1732,
            stars: "4.6",
            bestSeller: false,
        },
        {
            id: 4,
            title: "The Web Front End Learning Guide",
            instructor: "Hassan Fulaih",
            img:"https://img-c.udemycdn.com/course/240x135/3107370_2fea_3.jpg",
            price: "E£1,299.99",
            students: 1232,
            stars: "4.7",
            bestSeller: false,
        },

        {
            id: 5,
            title: "Javascript for Beginners",
            instructor: "Tech Learning Network",
            img:"https://img-c.udemycdn.com/course/240x135/8324_fa84_13.jpg",
            price: "E£1,099.99",
            students: 1032,
            stars: "4.6",
            bestSeller: false,
        },

        {
            id: 6,
            title: "The Complete 2022 Flutter & Dart Development Course [Arabic]",
            instructor: "Abdullah Mansour",
            img:"https://img-c.udemycdn.com/course/240x135/3937644_1a8c_4.jpg",
            price: "E£179.99",
            students: 7502,
            stars: "4.7",
            bestSeller: true,
        },

    ];

    const videos=info.map(function(video){
        return <CourseMember 
            key={video.id}
            img={video.img}
            title={video.title}
            instructor={video.instructor}
            stars={video.stars}
            students={video.students}
            price={video.price}
            bestSeller={video.bestSeller}
            />
    });

    return (
        <div className="videos">
            {videos}
        </div>
    );
}

export default Course