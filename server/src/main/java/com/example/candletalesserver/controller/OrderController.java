package com.example.candletalesserver.controller;

import com.example.candletalesserver.entity.Order;
import com.example.candletalesserver.request.OrderRequest;
import com.example.candletalesserver.response.ApiResponse;
import com.example.candletalesserver.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/orders")
@Validated
public class OrderController {

    private static final Logger logger = LoggerFactory.getLogger(OrderController.class);

    @Autowired
    private OrderService orderService;

    @PostMapping("/create")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<ApiResponse<Order>> createOrder(@RequestBody OrderRequest orderRequest) {
        try {
            Order order = orderService.saveOrder(orderRequest);
            return ResponseEntity.ok(new ApiResponse<>(true, "Order placed successfully", order));
        } catch (Exception e) {
            logger.error("Failed to place order: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(false, "Failed to place order", null));
        }
    }
}
