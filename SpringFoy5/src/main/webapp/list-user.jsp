<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="foyspring.dao.CustomerDAOImpl" %>
<%@ page import="foyspring.entity.Customer" %>
<%@ page import="java.util.List"%>


<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>javaguides.net</title>
<link href="<c:url value="/resources/css/bootstrap.min.css" />"
 rel="stylesheet">
<script src="<c:url value="/resources/js/jquery-1.11.1.min.js" />"></script>
<script src="<c:url value="/resources/js/bootstrap.min.js" />"></script>
</head>
<body>
 
   <h2>CRM - Customer Relationship Manager</h2>
   <hr />
	
	<% 
	CustomerDAOImpl dao = new CustomerDAOImpl();
	List<Customer> listem = null;
	listem = dao.getCustomers();
	
	%>
	
</body>
</html>