@pengguna
Feature: kasirAja "Pengguna" Feature

  @all @positive
  Scenario: Add new user
    Given I open kasirAja login page
    When I log in with email "toko@ane.com" and password "123456"
    Then I should be on dashboard page
    When I navigate to "pengguna" page
    Then I should see the list of users
    When I click "tambah" button
    Then I should see the form of creating new user
    When I input name "User1", email "user1@gmail.com", password "123", and click "simpan" button
    Then I can see the message "success | item ditambahkan"

  @all @positive
  Scenario: Verify new user
    Given I open kasirAja login page
    When I navigate to "pengguna" page
    Then I should see "User1" on the list

  @all @positive
  Scenario: Delete user
    Given I open kasirAja login page
    When I navigate to "pengguna" page
    Then I should see the list of users
    When I search "User1", click the three dots button and click "hapus"
