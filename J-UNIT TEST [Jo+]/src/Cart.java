public class Cart {
    private String name;
    private double price;
    private int quantity;

    public void addToCart(String itemName,double itemPrice ,int itemNum){
        setName(itemName);
        setPrice(itemPrice);
        setQuantity(itemNum);
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getTotal(){
       return this.price * this.quantity;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }
}
