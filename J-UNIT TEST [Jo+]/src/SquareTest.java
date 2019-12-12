import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SquareTest {
    @Test
    void getArea() {
        assertEquals(Square.getArea(5),25);
    }
}