To: Mark A Yoder
From: Guntuku Vikas
Date: 3rd October, 2015
Subject: Lab 07 Submission
Partner's Name : Onkar Singh
Name: Guntuku Vikas
Roll No.: B13212


	Lab07 aims at controlling a gyroscope sensor in order to find the acceleration an object is experiencing, the temperature around that area and the gyroscopic readings of that orientation of the object, which in this case happens to be the Beaglebone setup.
	
	In this lab the Gyroscope has been wired to the Beaglebone as given in the diagram. We need to connect the 4 pins VCC, GND ,XCL and XDA to the beaglebone. We need to use the analog input pins in order to read the data from the gyroscope. In the code "Gyro.js" and "gyro2.js" data is sent in form of an array of length 14 with each element of data 8 bits each. The elements from 0 to 5 corresponds to accelorometer readings, 6 and 7, temperature sensor and 8 to 13 correspond to gyroscope readings. The gyroscope sends data in 8 bits each. Afer shifting by 8 bits and adding the corresponding elements together, we get the respective values of acceleration, temperature and gyroscope. But we need to propogate 32 bit data. so we perform sign extension by forwarding and backwarding the 16 bit data by 16 bits, thus sending a 32 bit data with the same value.
	
	This lab familiarized us with the gyroscopic sensor, which has a wide range of utilities in the outside world. Tis may prove very effective for projects involving movement and balance.
