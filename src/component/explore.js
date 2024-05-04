import React from 'react';

const Explore = ({ drugData }) => {
  function formatDate(inputDate) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const parts = inputDate.split('/');
    const monthIndex = parseInt(parts[0], 10) - 1;
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;

    return formattedDate;
  }
  return (
    <div class="explore-main">
      <div class="explore-news">
        <h2>Explore more on Hidoc Dr.</h2>
        <div class="explore-container">
          <div class="explore-news-image">
            <img src={drugData?.news?.urlToImage} />
          </div>
          <div class="explore-news-blog">
            <h4>News</h4>
            <h3>{drugData?.news?.title}</h3>
            <p>{drugData?.news?.description}</p>
            <h6>{`Posted on ${formatDate(drugData?.news?.publishedAt)}`}</h6>
          </div>
        </div>
      </div>
      <div class="explore-article">
        <div class="latest-article">
          <h4>{`CRITICAL CRE - ${formatDate(
            drugData?.article?.createdAt
          )}`}</h4>
          <h3>{drugData?.article?.articleTitle}</h3>
          <p
          // dangerouslySetInnerHTML={{
          //   __html:
          //     drugData?.article?.articleDescription
          //       .split('<h2>')
          //       .slice(0, 1) + '.........',
          // }}
          >
            As medical professionals, we are well aware of the devastating
            effects that some illnesses can have on our patients. However, there
            are certain conditions that require an even higher level of
            attention and understanding due to their acute nature. One such
            condition is Purpura Fulminans - a rare but potentially fatal
            disorder that affects the blood vessels in the body.
          </p>
        </div>
        <div class="rest-article">
          <div>
            {' '}
            <h4>{`CRITICAL CRE - ${formatDate(
              drugData?.article?.createdAt
            )}`}</h4>
            <h3>
              The Science Behind Crest Disease: Exploring the underlying
              mechanisms
            </h3>
          </div>
          <div>
            <h4>{`CRITICAL CRE - ${formatDate(
              drugData?.article?.createdAt
            )}`}</h4>
            <h3>
              A Comprehensive Guide To Apache Scoring: How it Works And Why You
              Should Use It
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
