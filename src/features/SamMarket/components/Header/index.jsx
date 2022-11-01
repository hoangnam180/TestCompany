import styled from "styled-components";
import images from "../../assert";
const HeaderStyle = styled.div`
  --dark-color: #606060;
  --text-color: #121212;
  --primary-color: #128707;
  .header-inner {
    max-width: 1128px;
    width: 100%;
    margin: 0 auto;
    .header-top {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;

      background: #ffffff;

      .nav {
        display: flex;
        gap: 15px;
        align-items: center;
        li {
          padding: 5px 0;
          font-weight: 400;
          font-size: 13px;
          line-height: 14px;
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--dark-color);
          .icon {
            position: relative;
            bottom: 2px;
          }
          &:not(:last-child):after {
            content: "";
            width: 1px;
            height: 8px;
            background-color: #e7e5e4;
            position: relative;
            left: 5px;
          }
          cursor: pointer;
          &.login {
            font-weight: 700;
          }
          &.register {
            color: var(--primary-color);
          }
        }
      }
    }
  }
  .header-bottom {
    padding: 13px 0;
    border-bottom: 1px solid #e7e5e4;
    border-top: 1px solid #e7e5e4;
    .nav-bot {
      display: flex;
      justify-content: space-between;
      max-width: 1128px;
      width: 100%;
      margin: 0 auto;
      gap: 25px;
      li {
        display: flex;
        gap: 20px;
      }
      li.search {
        flex: 0.95;
        position: relative;
        align-items: center;
        input {
          width: 100%;
          padding: 8px 16px;
          max-height: 38px;
          height: 100%;
          background: #ffffff;
          border: 1px solid #128707;
        }
        img {
          position: absolute;
          right: 0;
        }
      }
      .icon {
        position: relative;
        top: 9px;
      }
    }
  }
  .navigation {
    max-width: 1128px;
    width: 100%;
    margin: 0 auto;
    ul {
      display: flex;
      gap: 20px;
      justify-content: center;
      li {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 10px 0;
        cursor: pointer;
        color: var(--text-color);
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        position: relative;
        .icon {
          position: relative;
          top: 1.5px;
        }
        &.active {
          color: var(--primary-color);
          &::after {
            content: "";
            width: 23px;
            height: 3px;
            background: var(--primary-color);
            position: absolute;
            bottom: 0;
            right: 50%;
            transform: translateX(50%);
          }
        }
      }
    }
  }
`;
const Header = () => {
  return (
    <HeaderStyle className="header">
      <header className="header-inner">
        <div className="header-top">
          <ul className="nav nav-left">
            <li>
              <span>
                <img src={images.globe} alt="" />
              </span>
              Tiếng Việt
              <span className="icon">
                <img src={images.subtract} alt="" />
              </span>
            </li>
            <li>Hỗ trợ</li>
            <li>Kiểm tra đơn hàng</li>
          </ul>
          <ul className="nav nav-right">
            <li>
              <span>
                <img src={images.vector} alt="" />
              </span>
              Thông Báo
            </li>
            <li className="login">Đăng Nhập</li>
            <li className="login register">Đăng Ký Miễn Phí</li>
          </ul>
        </div>
      </header>
      <div className="header-bottom">
        <ul className="nav-bot">
          <li>
            <img src={images.logo} alt="" />
          </li>
          <li className="search">
            <input type="text" />
            <img src={images.search} alt="" />
          </li>
          <li className="icon">
            <span>
              <img src={images.clock} alt="" />
            </span>
            <span>
              <img src={images.cart} alt="" />
            </span>
          </li>
        </ul>
      </div>
      <nav className="navigation">
        <ul>
          <li className="nav-item">Trang chủ</li>
          <li className="nav-item">Sâm Ngọc Linh</li>
          <li className="nav-item">Rượu Sâm</li>
          <li className="nav-item active">Thực phẩm chức năng</li>
          <li className="nav-item">Phụ phẩm</li>
          <li className="nav-item">
            <span className="icon">
              <img src={images.heart} alt="" />
            </span>
            Sản phẩm yêu thích
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
