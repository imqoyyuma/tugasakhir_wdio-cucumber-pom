@login
Feature: kasirAja Login Feature

  @all @negative
  Scenario: Failed login with invalid email
    Given I open kasirAja login page
    When I log in with email "invalid@email.com" and password "123456"
    Then I will see error message

  @all @negative
  Scenario: Failed login with invalid password
    Given I open kasirAja login page
    When I log in with email "toko@ane.com" and password "invalid_password"
    Then I will see error message

  @all @positive
  Scenario: Successful login with valid credentials
    Given I open kasirAja login page
    When I log in with email "toko@ane.com" and password "123456"
    Then I should be on dashboard page