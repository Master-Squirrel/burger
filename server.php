<?php

    $name = $_POST['name'];
    $street = $_POST['street'];
    $phone = $_POST['phone'];
    $house = $_POST['house'];
    $block = $_POST['block'];
    $flat = $_POST['flat'];
    $floor = $_POST['floor'];
    $formComments = $_POST['formComments'];
    $paytype = $_POST['paytype'];
    $recall = $_POST['recall'];
    
    $recall = isset($recall) ? 'НЕТ' : 'ДА';
    $paytype = $paytype == 1 ? 'Наличные' : 'Карта';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказан бургер</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон:' . $phone . '</li>
            <li>Адрес: ' . $street . "/" . $house . "/" . $floor . "/" . $flat . '</li>
            <li>Способ оплаты: ' . $paytype . '</li>
            <li>Комментарий к заказу: ' . $formComments . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $recall . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('webcaster@mail.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>