package ru.kpd.steps;

import cucumber.api.DataTable;
import cucumber.api.java.ru.Допустим;
import cucumber.api.java.ru.Когда;
import cucumber.api.java.ru.Тогда;
import org.junit.Assert;
import org.openqa.selenium.*;

import java.util.List;
import java.util.Map;


public class MyStepdefs extends Endpoint {
    @Допустим("^пользователь перешел на страницу авторизации$")
    public void пользовательПерешелНаСтраницуАвторизации() {
        driver.get(PlatformURL);
    }
    @Когда("^пользователь пытается залогинится введя корректные учётные данные$")
    public void пользовательПытаетсяЗалогинитсяВведяКорректныеУчётныеДанные() {
        driver.findElement(By.id("j_username")).sendKeys(admin);
        driver.findElement(By.id("j_password")).sendKeys(passwordadmin);
        driver.findElement(By.id("loginBtn")).click();
    }

    @Тогда("^происходит успешная авторизация$")
    public void происходитУспешнаяАвторизация() {
        String logged = driver.findElement(By.xpath("//span[@class=\"loggedIn-user\"]")).getText();
        Assert.assertTrue("Не удалось авторизироваться под администратором системы", logged.contains("admin"));
    }

    @Когда("^пользователь пытается залогинится введя некорректные учётные данные$")
    public void пользовательПытаетсяЗалогинитсяВведяНекорректныеУчётныеДанные() {
        driver.findElement(By.id("j_username")).sendKeys(admin);
        driver.findElement(By.id("j_password")).sendKeys("123");
        driver.findElement(By.id("loginBtn")).click();
    }

    @Тогда("^появляется предупреждение Ошибка авторизации\\. Попробуйте еще раз\\.$")
    public void появляетсяПредупреждениеОшибкаАвторизацииПопробуйтеЕщеРаз() {
    String errorAuth = driver.findElement(By.xpath("//*[@id=\"loginForm\"]")).getText();
    Assert.assertTrue("Сообщение 'Ошибка авторизации. Попробуйте снова' не выводится", errorAuth.contains("Ошибка авторизации. Попробуйте еще раз."));
    driver.quit();
    }

    @Допустим("^пользователь авторизован под KpdUser$")
    public void пользователь_авторизован_под_KpdUser() {
        driver.get(PlatformURL);
        driver.findElement(By.id("j_username")).sendKeys(kpdUser);
        driver.findElement(By.id("j_password")).sendKeys(passwordKpdUser);
        driver.findElement(By.id("loginBtn")).click();
    }

    @Допустим("^перешел на страницу \"([^\"]*)\"$")
    public void перешел_на_страницу(String URL) {
        driver.get(PlatformURL + URL);
    }

    @Допустим("^пользователь нажал на кнопку \"([^\"]*)\"$")
    public void пользователь_нажал_на_кнопку(String button) {
        driver.findElement(By.xpath("//*[contains(text(),\""+button+"\")]")).click();
    }

    @Когда("^пользователь заполнил 3 поля$")
    public void пользователь_заполнил_3_поля(DataTable arg1) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
        // E,K,V must be a scalar (String, Integer, Date, enum etc)
        List<Map<String, String>> table = arg1.asMaps(String.class, String.class);
        System.out.println(table);
        driver.findElement(By.xpath("//input[@data-p-label=\""+table.get(0).get("Название")+"\"]")).sendKeys(table.get(0).get("Значение"));
        driver.findElement(By.xpath("//input[@data-p-label=\""+table.get(1).get("Название")+"\"]")).sendKeys(table.get(1).get("Значение"));
        driver.findElement(By.xpath("//input[@data-p-label=\""+table.get(2).get("Название")+"\"]")).sendKeys(table.get(2).get("Значение"));
    }
    @Когда("^пользователь заполнил 2 поля$")
    public void пользователь_заполнил_2_поля(DataTable arg1) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
        // E,K,V must be a scalar (String, Integer, Date, enum etc)
        List<Map<String, String>> table = arg1.asMaps(String.class, String.class);
        System.out.println(table);
        driver.findElement(By.xpath("//input[@data-p-label=\""+table.get(0).get("Название")+"\"]")).sendKeys(table.get(0).get("Значение"));
        driver.findElement(By.xpath("//input[@data-p-label=\""+table.get(1).get("Название")+"\"]")).sendKeys(table.get(1).get("Значение"));
    }

    @Тогда("^В блоке \"([^\"]*)\" присутствует строка: \"([^\"]*)\"$")
    public void в_блоке_присутствует_строка(String button, String title)  {
        // Write code here that turns the phrase above into concrete actions
        String picklist = driver.findElement(By.xpath("//*[contains(text(),\""+button+"\")]")).getText();
        System.out.println(picklist);
        Assert.assertFalse("Запрашиваемая строка отсутствует", picklist.contains("Доступные виды сведений для Мультизапроса"));

    }

}