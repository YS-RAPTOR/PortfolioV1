![Calculator](Calculator.webp "Calculator")

In this project, our team embarked on the ambitious task of developing a feature-rich calculator system that incorporated a keypad, an LCD display, and an Arduino Mega Microcontroller. The project aimed to provide a comprehensive solution, capable of performing basic calculations, handling memory operations, and supporting a minimum of three operands. Notably, the system was designed with robust security features, including password protection with the flexibility to change the password as needed.

One standout feature of our project was the utilization of interrupt-driven programming for keypad input, setting it apart from conventional polling-based systems. This approach offered substantial advantages, notably enhancing input responsiveness.

For arithmetic calculations, we implemented the shunting yard algorithm, a sophisticated method that leveraged stack data structures to execute BODMAS (Brackets, Orders, Division and Multiplication, Addition and Subtraction) calculations with an impressive time complexity of O(n). The implementation prioritized efficient memory usage, as the code was designed to run on an embedded platform.

Our LCD display, boasting a 16x2 configuration, offered an intuitive user interface that allowed horizontal scrolling and expression editing before evaluation. Additionally, the system was programmed to identify and catch syntax errors, improving the overall user experience. Notably, the calculator accommodated expressions of up to 255 characters in length, an impressive feat achieved while managing memory resources efficiently.

As an added utility, we introduced a timer functionality, enabling users to set countdown times using the keypad. Once the timer elapsed, the screen would flash, providing a clear indication that the timer had completed.

The most formidable challenge in this project was the successful implementation of the shunting yard algorithm. Our solution involved tokenizing the input string and performing calculations in a single pass, an approach optimized for the embedded platform's performance constraints.

Notably, our project earned a perfect score, a testament to our meticulous work and dedication to meeting the project's demanding requirements. As the team leader, I assumed a central role in the project's success. My responsibilities encompassed the implementation of calculation logic and the development of the interrupt-driven input system. I also took charge of coordinating team activities, ensuring regular meetings took place, and effectively distributing tasks among my two teammates. My leadership style emphasized open communication and flexibility, crucial qualities that fostered a collaborative and productive team environment, particularly during challenging periods such as exams.

The primary technology employed in this project was the Arduino platform, with the code written in C++. Our codebase was meticulously managed on GitHub, facilitating version control and collaboration. We leveraged default Arduino libraries to control the LCD screen and interface with the RTC clock module. The keypad system, central to our project's functionality, was a custom, in-house development designed to work seamlessly with interrupts.

In conclusion, our project exemplified our ability to conceive, design, and implement a complex and efficient calculator system that exceeded the specified requirements. It showcased our technical prowess, problem-solving abilities, and leadership skills.