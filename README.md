
# Sports Profiling Platform

## Overview
The Sports Profiling Platform is a SaaS-based system designed to enable users to create and analyze profiles of athletes, primarily focusing on cricket players. This platform provides a centralized database for storing athlete information such as stats, performance records, injury history, and more. It is also equipped with giving the relevant information to the organizations needing it.

## Features
- **User Registration and Login**: Separate registration and login processes for players and organizations.
- **Profile Creation and Management**: Players can create and manage their professional profiles, including their work experience, education, skills, achievements, and more.
- **Information Management**: The platform manages stats, performance records, injury history, and other critical data.
- **Connections and Networking**: Users can connect with professionals in their domain, fostering opportunities within the sports industry.
- **Data Analysis**: The platform analyzes collected data to provide organizations with the best datasets according to their requirements.
- **Payment Gateway**: Organizations can buy basic or premium plans according to their needs.

## Technology Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Java
- **Database**: MySQL (hosted on AWS RDS)
- **Cloud Infrastructure**: Amazon Web Services (AWS)
  - **EC2**: Hosts the website on a Linux instance using the LAMP stack
  - **S3**: Stores static files like images, videos, and documents
  - **WAF**: Protects the application from common web attacks
  - **ALB**: Distributes incoming traffic to multiple EC2 instances
  - **Auto Scaling**: Adjusts the number of EC2 instances based on traffic load
  - **DynamoDB**: Stores session data and user preferences
  - **Lambda**: Handles serverless backend processing
  - **API Gateway**: Exposes APIs for external services
  - **SES**: Sends transactional or marketing emails
  - **DMS**: Migrates data from on-premises databases or other cloud services
  - **Macie**: Monitors S3 buckets for sensitive or PII data
  - **IAM**: Manages access to AWS resources

## Demo Video

[Demo Video](https://drive.google.com/file/d/1e-xts0rTpsisw1XuKIE2RrROPZO32UT8/view?usp=sharing)

## Conclusion
The Sports Profiling Platform provides a valuable service to athletes, enabling them to showcase their talents and connect with potential employers. The platform is scalable, secure, and user-friendly, making it a robust solution for the sports industry.
