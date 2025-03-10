import "./HeroSection.scss";

function HeroSection() {
    return (
      <section className="container my-5" style={{padding: "24px"}}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold">
              Cùng xem những <span className="text-warning">tính năng</span> thú vị của <span className="text-warning">Future Me</span>
            </h2>
            <p className="mt-4 text-muted">
              Bao gồm hệ thống trắc nghiệm dự đoán nghề nghiệp thích hợp. Từ đó cung cấp danh sách kiến thức, kỹ năng cần trang bị và chương trình học đi kèm. Ngoài ra Future Me còn giới thiệu đến bạn những cơ sở học tập uy tín và sự tư vấn đến từ những chuyên gia hay nhân vật thành công với nghề nghiệp nói trên.
            </p>
            <button className="btn main-btn mt-3">Xem chi tiết</button>
          </div>
  
          <div className="features-container col-lg-6 text-center">
            <ul className="features-list">
            <li className="feature-item">
                <img src="/src/assets/icons/exam-icon.svg" alt="ai-icon" />
                <h5>Đề thi chọn lọc từ các chuyên gia</h5>
              </li>
              <li className="feature-item">
                <img src="/src/assets/icons/online-test-icon.svg" alt="ai-icon" />
                <h5>Môi trường thi chân thật</h5>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
  