import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PageWrapper = styled.div`
  min-height: 500px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 51px;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 1440px) {
    padding: 0;
  }
  @media only screen and (max-width: 1360px) {
    margin: 0 -15px;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    height: 262px;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
  }

  .blog_post {
    width: calc(100% / 3 - 50px);
    border-radius: 20px;
    padding: 50px 37px 54px;
    box-shadow: 0 0 100px rgba(175, 182, 194, 0.2);
    background-color: ${themeGet('colors.white', '#ffffff')};
    margin: 0 25px 25px;
    text-align: center;
    @media only screen and (max-width: 1360px) {
      width: calc(100% / 3 - 30px);
      border-radius: 15px;
      padding: 45px 30px 40px;
      margin: 0 15px 25px;
    }
    @media only screen and (max-width: 991px) {
      border-radius: 10px;
      padding: 30px 18px;
    }
    @media only screen and (max-width: 767px) {
      width: calc(100% / 2 - 30px);
      margin-bottom: 30px;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
      padding: 45px 30px;
    }

    .thumbnail {
      img {
        height: 100px;
        width: auto;
        margin-bottom: 38px;
        @media only screen and (max-width: 1440px) {
          height: 90px;
          margin-bottom: 35px;
        }
        @media only screen and (max-width: 1360px) {
          height: 80px;
          margin-bottom: 27px;
        }
        @media only screen and (max-width: 991px) {
          height: 67px;
          margin-bottom: 20px;
        }
      }
    }

    .content {
      h3 {
        margin: 0 0 10px;
        font-size: 20px;
        line-height: 30px;
        font-weight: 600;
        @media only screen and (max-width: 1440px) {
          font-size: 18px;
        }
        @media only screen and (max-width: 1360px) {
          font-size: 16px;
          line-height: 28px;
        }
        @media only screen and (max-width: 991px) {
          font-size: 15px;
          line-height: 26px;
          margin-bottom: 8px;
        }
      }

      p {
        margin: 0;
        font-size: 16px;
        line-height: 28px;
        color: ${themeGet('colors.text', '#294859')};
        @media only screen and (max-width: 1360px) {
          font-size: 15px;
        }
        @media only screen and (max-width: 991px) {
          line-height: 25px;
          /* color: #616970; */
        }
      }
    }
  }
`;

export default PageWrapper;
