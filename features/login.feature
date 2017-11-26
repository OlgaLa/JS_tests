Feature: As a user I should be able to login using valid username and password

    Scenario: Login with valid username and password
        Given I go to Home page
        When I enter valid username
        Then I should be in employee page