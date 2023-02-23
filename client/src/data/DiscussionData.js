import authorOneIcon from '../assets/images/siddheshProfilePhoto.png';
import authorTwoIcon from '../assets/images/ninadProfilePhoto.jpg';
import authorThreeIcon from '../assets/images/rahulProfilePhoto.jpg';

const DiscussionData = [
    
    {
        title: 'Should I prefer Javascript for my project’s Frontend or use a framework like React ?',
        discussionAuthor: 'Siddhesh Mane',
        discussionComments: 10,
        discussionVotes: 24,
        discussionViews: 87,
        discussionAuthorPic: authorOneIcon,
        tags: [
            {
                name: 'Web development',
                color: 'lightblue'
            },

            {
                name: 'Computer',
                color: 'lightcoral'
            },

            {
                name: 'BE',
                color: 'lightgreen'
            }
        ]
    },

    {
        title: 'I am building a automated garden watering system should I use the Arduino UNO or the Arduino Nano as my micro-controller ?',
        discussionAuthor: 'Ninad Patil',
        discussionComments: 54,
        discussionVotes: 12,
        discussionViews: 34,
        discussionAuthorPic: authorTwoIcon,
        tags: [
            {
                name: 'Internet of Things',
                color: 'cyan'
            },

            {
                name: 'Mechanical',
                color: 'pink'
            },

            {
                name: 'TE',
                color: 'lightgrey'
            }
        ]
    },

    {
        title: 'Can anyone recommend me some resources to get started with my E-bike project ?',
        discussionAuthor: 'Rahul Prajapati',
        discussionComments: 56,
        discussionVotes: 45,
        discussionViews: 97,
        discussionAuthorPic: authorThreeIcon,
        tags: [
            {
                name: 'Machine Learning',
                color: 'var(--orange)'
            },

            {
                name: 'Robotics',
                color: 'var(--yellow)'
            },

            {
                name: 'BE',
                color: 'lightgreen'
            }
        ]
    }
]

export default DiscussionData;