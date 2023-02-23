import authorOneIcon from '../assets/images/sagarProfilePhoto.jpeg';
import authorTwoIcon from '../assets/images/vishalProfilePhoto.jpg';
import authorThreeIcon from '../assets/images/rahulProfilePhoto.jpg';
import subAuthorOneIcon from '../assets/images/aynaanProfilePhoto.jpeg';

const commentData = [

    {
        commentAuthor: 'Sagar Pachare',
        latestUpdated: '14th August, 2022 22:30',
        description: "Excellent Project !! What Tech Stack did you use for this project ?",
        commentAuthorPic: authorOneIcon,
        commentVotes: 93,
        commentSubAuthors: [

            {
                commentAuthor: 'Aynaan Quarishi',
                latestUpdated: '15th August, 2022 22:30',
                description: "I used React for the WebApp and some Python and Computer Vision too.",
                commentAuthorPic: subAuthorOneIcon,
                commentVotes: 2
            }
        ]
    },

    {
        commentAuthor: 'Vishal Pandey',
        latestUpdated: '16th August, 2022 22:30',
        commentAuthorPic: authorTwoIcon,
        description: "Woah !! Cool Project buddy",
        commentVotes: 45,
        commentSubAuthors: []
    },

    {
        commentAuthor: 'Rahul Prajapati',
        latestUpdated: '16th August, 2022 22:30',
        commentAuthorPic: authorThreeIcon,
        description: "Woah !! Cool Project buddy",
        commentVotes: 45,
        commentSubAuthors: []
    }
]

export default commentData;