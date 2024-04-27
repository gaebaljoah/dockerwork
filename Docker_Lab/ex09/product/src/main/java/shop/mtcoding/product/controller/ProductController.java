package shop.mtcoding.product.controller;

import java.util.List;

import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Producer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import shop.mtcoding.product.model.Product;
import shop.mtcoding.product.model.ProductRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
public class ProductController {

    private final ProductRepository productRepository;

    @GetMapping("/")
    public String main(){

        return "Hello World";
    }
    

    @GetMapping("/products")
    public ResponseEntity<?> products() {
        System.out.println("product controller에 진입하였습니다.");
        List<Product> products = productRepository.findAll();
        for (int i = 0; i < products.size(); i++) {
            System.out.println((i+1)+"번째 상품:"+products.get(i).toString());
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
