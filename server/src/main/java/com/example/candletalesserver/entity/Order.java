package com.example.candletalesserver.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "orders", schema = "candle")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String address;
    private String city;
    private String district;

    @Lob
    private String items; // Lưu danh sách sản phẩm dưới dạng JSON

    @CreationTimestamp
    private LocalDateTime createdAt; // Ngày đặt hàng
}
