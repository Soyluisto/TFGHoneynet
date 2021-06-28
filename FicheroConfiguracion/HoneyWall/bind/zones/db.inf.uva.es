;
; BIND data file for local loopback interface
;
$TTL	604800
@	IN	SOA	HoneyWall.inf.uva.es. admin.inf.uva.es. (
			      3		; Serial
			 604800		; Refresh
			  86400		; Retry
			2419200		; Expire
			 604800 )	; Negative Cache TTL
;

	IN	NS	HoneyWall.inf.uva.es.

HoneyWall.inf.uva.es.	IN	A	10.10.1.1
aulas.inf.uva.es.	IN	A	10.10.1.2
jair.lab.inf.uva.es.	IN	A	10.10.1.2
#_http._tcp.aulas.inf.uva.es. 3600 IN SRV 10 5 80 aulas.inf.uva.es.
