<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "dmi.granulate@gmail.com"; // Замени с твоя имейл
    $subject = "Ново запитване от уебсайта";
    $body = "Име: $name\nИмейл: $email\n\nСъобщение:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Съобщението е изпратено успешно!";
    } else {
        echo "Грешка при изпращане на съобщението.";
    }
} else {
    echo "Невалидна заявка.";
}
?>
