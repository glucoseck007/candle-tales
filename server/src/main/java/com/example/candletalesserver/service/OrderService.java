package com.example.candletalesserver.service;

import com.example.candletalesserver.entity.Order;
import com.example.candletalesserver.repository.OrderRepository;
import com.example.candletalesserver.request.OrderRequest;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order saveOrder(OrderRequest orderRequest) {
        Order order = new Order();
        order.setFirstName(orderRequest.getFirstName());
        order.setLastName(orderRequest.getLastName());
        order.setEmail(orderRequest.getEmail());
        order.setPhone(orderRequest.getPhone());
        order.setAddress(orderRequest.getAddress());
        order.setCity(orderRequest.getCity());
        order.setDistrict(orderRequest.getDistrict());
        order.setItems(orderRequest.getItems()); // Lưu danh sách sản phẩm

        return orderRepository.save(order);
    }

}
