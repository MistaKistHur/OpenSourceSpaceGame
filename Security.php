<?php

		private $Uni_Hash_Cookie  = bin2hex(128);
		private $Uni_Space_Cookie = sha512(32);
		private $Uni_Key_Code     = md5(16);

		private   $usrCookie  = '',
		private   $signDate   = '',
		private   $email      = '',
		private   $guid       = '',
		private   $uid        = '',
		private   $age        = '',
