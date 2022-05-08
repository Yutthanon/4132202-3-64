<?php

require("../function/condb.php");

$sql ="SELECT * FROM tb_member ORDER BY Username ASC";
$result = $mysql->query($sql);
?>
<table>
    <tr>
        <td>ID</td>
        <td>username</td>
        <td>password</td>
    </tr>
    <?php
    while ($row = $result->fetch_assoc()) {
    ?>
        <tr>
            <td><?= $row["ID"] ?></td>
            <td><?= $row["Username"] ?></td>
            <td><?= $row["password"] ?></td>
        </tr>
    <?php
    }
    ?>
</table>

