import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CartTest {

    @Test
    void addToCart() {
        Cart cart = new Cart();
        cart.addToCart("ข้าวผัดหมู",35,2);
        System.out.println(cart.getName());
        System.out.println(cart.getPrice());
        System.out.println(cart.getQuantity());
        System.out.println(cart.getTotal());
    }

    @Test
    void getTotal() {
        Cart cart = new Cart();
        cart.addToCart("ข้าวผัดหมู",35,2);
        assertEquals(cart.getTotal(),70);
    }

    @Test
    void getName() {
        Cart cart = new Cart();
        cart.addToCart("ข้าวผัดหมู",35,2);
        assertEquals(cart.getName(),"ข้าวผัดหมู");
    }

    @Test
    void getPrice() {
        Cart cart = new Cart();
        cart.addToCart("ข้าวผัดหมู",35,2);
        assertEquals(cart.getPrice(),35.0);
    }

    @Test
    void getQuantity() {
        Cart cart = new Cart();
        cart.addToCart("ข้าวผัดหมู",35,2);
        assertEquals(cart.getQuantity(),2);
    }


}