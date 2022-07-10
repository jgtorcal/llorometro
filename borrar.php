<?php

// Delete de log rms.txt generated
$myfile = fopen("rms.txt", "w") or die("Unable to open file!");
$txt = "";
fwrite($myfile, $txt);
fclose($myfile);

?>