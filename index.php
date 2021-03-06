<!DOCTYPE html>
<html>
    <head>
	    <title>Diane Yang</title>
	        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"> 
	        <meta name="description" content="diane yang" /> 
	        <meta name="keywords" content="diane yang, harvard, stamford, hubspot" />

	        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

	        <base href="//www.dianexyang.com/" />
	        <link rel="stylesheet" href="css/reset.css" type="text/css" />
	        <link rel="stylesheet" href="css/style.css" type="text/css" />

	        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900|Raleway:400,900' rel='stylesheet' type='text/css'>
	        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">


	        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	        <script src="js/angular.js"></script>
	        <script src="js/angular-route.js"></script>
	        <script src="js/angular-ui-router.min.js"></script>
	        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular-animate.min.js"></script>
	        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular-resource.min.js"></script>
	        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular-sanitize.min.js"></script>
	        <script src="js/isotope.pkgd.min.js"></script>
	        <script src="js/app.js"></script>
	        <script src="js/animations.js"></script>
	        <script src="js/controllers.js"></script>
	        <script src="js/directives.js"></script>
	        <script src="js/services.js"></script>

    </head>

<body ng-app="portfolio">

	<div id="header" class="clearfix all-caps" ng-controller="MainController">
		<div class="container">
			<div id="title">
				<h1>
					<a href="/">Diane Yang</a>
				</h1>
			</div>

			<div id="navigation" ng-class="{expanded: expanded, scrolled: scroll > 55}"  scroll-position="scroll">
				<ul class="inline-list small-spaced-links right">
					<li id="work">
						<a href="/" ng-click="expanded=false">Work</a>
					</li>
					<li id="resume">
						<a href="/resume" ng-click="expanded=false">Resume</a>
					</li>
					<li id="about">
						<a href="/about" ng-click="expanded=false">About</a>
					</li>
					<li id="contact">
						<a href="/contact" ng-click="expanded=false">Contact</a>
					</li>
				</ul>
				<div id="bars" ng-init="expanded=false" ng-click="expanded=!expanded">
					<i class="fa fa-bars" ng-show="!expanded"></i>
					<span id="close-nav" ng-show="expanded">&#x2715;</span>
				</div>
			</div>
		</div>
	</div>

	<div ng-view fade-from-top class="main-view" autoscroll="true"></div>

	<div id="footer">
	</div>

<!-- Start of Async HubSpot Analytics Code -->
  <script type="text/javascript">
    (function(d,s,i,r) {
      if (d.getElementById(i)){return;}
      var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
      n.id=i;n.src='//js.hs-analytics.net/analytics/'+(Math.ceil(new Date()/r)*r)+'/307901.js';
      e.parentNode.insertBefore(n, e);
    })(document,"script","hs-analytics",300000);
  </script>
<!-- End of Async HubSpot Analytics Code -->

</body>

</html>