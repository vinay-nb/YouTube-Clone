import React from "react";

const commentsData = [
  {
    name: "Vinay",
    text: "Lorem ipsum dolor sit",
    replies: [],
  },
  {
    name: "Vinay",
    text: "Lorem ipsum dolor sit",
    replies: [
      {
        name: "Vinay",
        text: "Lorem ipsum dolor sit",
        replies: [
          {
            name: "Vinay",
            text: "Lorem ipsum dolor sit",
            replies: [
              {
                name: "Vinay",
                text: "Lorem ipsum dolor sit",
                replies: [
                  {
                    name: "Vinay",
                    text: "Lorem ipsum dolor sit",
                    replies: [
                      {
                        name: "Vinay",
                        text: "Lorem ipsum dolor sit",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Vinay",
            text: "Lorem ipsum dolor sit",
            replies: [],
          },
        ],
      },
      {
        name: "Vinay",
        text: "Lorem ipsum dolor sit",
        replies: [],
      },
    ],
  },
  {
    name: "Vinay",
    text: "Lorem ipsum dolor sit",
    replies: [
      {
        name: "Vinay",
        text: "Lorem ipsum dolor sit",
        replies: [],
      },
    ],
  },
  {
    name: "Vinay",
    text: "Lorem ipsum dolor sit",
    replies: [
      {
        name: "Vinay",
        text: "Lorem ipsum dolor sit",
        replies: [],
      },
    ],
  },
  {
    name: "Vinay",
    text: "Lorem ipsum dolor sit",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex my-2 p-2 shadow-sm bg-gray-100 rounded-md">
      <img className="w-10 h-10" src="user.png" alt="user" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, idx) => (
    <div key={idx}>
      <Comment data={comment} />
      <div className="pl-5 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <p className="text-2xl font-bold">Comments: </p>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
