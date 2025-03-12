package com.example.candletalesserver.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String address;
    private String city;
    private String district;
    private String items; // Dữ liệu sản phẩm dưới dạng JSON
}

