$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SKPD/GUI/Мультизапрос/SKPD-86 Добавление ФССП.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 3,
  "name": "«Запрос общедоступной информации из БД ИП ФССП» для сервиса «Мультизапрос» под пользователем KpdUser",
  "description": "",
  "id": "«запрос-общедоступной-информации-из-бд-ип-фссп»-для-сервиса-«мультизапрос»-под-пользователем-kpduser",
  "keyword": "Функция",
  "tags": [
    {
      "line": 2,
      "name": "@MultiRequestFSSP"
    }
  ]
});
formatter.before({
  "duration": 5212196960,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Предыстория"
});
formatter.step({
  "line": 6,
  "name": "пользователь авторизован под KpdUser",
  "keyword": "Допустим "
});
formatter.step({
  "line": 7,
  "name": "перешел на страницу \"/views/connector/multirequest/multirequestOperationRegistry.xhtml\"",
  "keyword": "И "
});
formatter.step({
  "line": 8,
  "name": "пользователь нажал на кнопку \"Создать запрос\"",
  "keyword": "И "
});
formatter.match({
  "location": "MyStepdefs.пользователь_авторизован_под_KpdUser()"
});
formatter.result({
  "duration": 2447830981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/views/connector/multirequest/multirequestOperationRegistry.xhtml",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.перешел_на_страницу(String)"
});
formatter.result({
  "duration": 676149250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Создать запрос",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "duration": 147200783,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Появление ВС в блоке \"Доступные виды сведений\"",
  "description": "",
  "id": "«запрос-общедоступной-информации-из-бд-ип-фссп»-для-сервиса-«мультизапрос»-под-пользователем-kpduser;появление-вс-в-блоке-\"доступные-виды-сведений\"",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 10,
      "name": "@success"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "пользователь заполнил 3 поля",
  "rows": [
    {
      "cells": [
        "Название",
        "Значение"
      ],
      "line": 13
    },
    {
      "cells": [
        "Фамилия",
        "Фамилия"
      ],
      "line": 14
    },
    {
      "cells": [
        "Имя",
        "Имя"
      ],
      "line": 15
    },
    {
      "cells": [
        "Регион регистрации",
        "12"
      ],
      "line": 16
    }
  ],
  "keyword": "Когда "
});
formatter.step({
  "line": 17,
  "name": "В блоке \"Доступные виды сведений для Мультизапроса\" присутствует строка: \"ФССП. Запрос общедоступной информации из базы данных исполнительных производств\"",
  "keyword": "Тогда "
});
formatter.match({
  "location": "MyStepdefs.пользователь_заполнил_3_поля(DataTable)"
});
formatter.result({
  "duration": 1148866547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Доступные виды сведений для Мультизапроса",
      "offset": 9
    },
    {
      "val": "ФССП. Запрос общедоступной информации из базы данных исполнительных производств",
      "offset": 74
    }
  ],
  "location": "MyStepdefs.в_блоке_присутствует_строка(String,String)"
});
formatter.result({
  "duration": 118543930,
  "error_message": "java.lang.AssertionError: Запрашиваемая строка отсутствует\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat ru.kpd.steps.MyStepdefs.в_блоке_присутствует_строка(MyStepdefs.java:93)\r\n\tat ✽.Тогда В блоке \"Доступные виды сведений для Мультизапроса\" присутствует строка: \"ФССП. Запрос общедоступной информации из базы данных исполнительных производств\"(SKPD/GUI/Мультизапрос/SKPD-86 Добавление ФССП.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1846666850,
  "status": "passed"
});
formatter.before({
  "duration": 3669333864,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Предыстория"
});
formatter.step({
  "line": 6,
  "name": "пользователь авторизован под KpdUser",
  "keyword": "Допустим "
});
formatter.step({
  "line": 7,
  "name": "перешел на страницу \"/views/connector/multirequest/multirequestOperationRegistry.xhtml\"",
  "keyword": "И "
});
formatter.step({
  "line": 8,
  "name": "пользователь нажал на кнопку \"Создать запрос\"",
  "keyword": "И "
});
formatter.match({
  "location": "MyStepdefs.пользователь_авторизован_под_KpdUser()"
});
formatter.result({
  "duration": 2121664594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/views/connector/multirequest/multirequestOperationRegistry.xhtml",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.перешел_на_страницу(String)"
});
formatter.result({
  "duration": 591326109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Создать запрос",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "duration": 237574473,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Обязательность поля \"Регион регистрации\" для доступа к ВС «Запрос общедоступной информации из БД ИП ФССП»",
  "description": "",
  "id": "«запрос-общедоступной-информации-из-бд-ип-фссп»-для-сервиса-«мультизапрос»-под-пользователем-kpduser;обязательность-поля-\"регион-регистрации\"-для-доступа-к-вс-«запрос-общедоступной-информации-из-бд-ип-фссп»",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 19,
      "name": "@success"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "пользователь заполнил 2 поля",
  "rows": [
    {
      "cells": [
        "Название",
        "Значение"
      ],
      "line": 22
    },
    {
      "cells": [
        "Фамилия",
        "Фамилия"
      ],
      "line": 23
    },
    {
      "cells": [
        "Имя",
        "Имя"
      ],
      "line": 24
    }
  ],
  "keyword": "Когда "
});
formatter.step({
  "line": 25,
  "name": "В блоке \"Доступные виды сведений для Мультизапроса\" отсутствует строка: \"ФССП. Запрос общедоступной информации из базы данных исполнительных производств\"",
  "keyword": "Тогда "
});
formatter.match({
  "location": "MyStepdefs.пользователь_заполнил_2_поля(DataTable)"
});
formatter.result({
  "duration": 895671482,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1299512753,
  "status": "passed"
});
formatter.before({
  "duration": 3786328041,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Предыстория"
});
formatter.step({
  "line": 6,
  "name": "пользователь авторизован под KpdUser",
  "keyword": "Допустим "
});
formatter.step({
  "line": 7,
  "name": "перешел на страницу \"/views/connector/multirequest/multirequestOperationRegistry.xhtml\"",
  "keyword": "И "
});
formatter.step({
  "line": 8,
  "name": "пользователь нажал на кнопку \"Создать запрос\"",
  "keyword": "И "
});
formatter.match({
  "location": "MyStepdefs.пользователь_авторизован_под_KpdUser()"
});
formatter.result({
  "duration": 1898576696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/views/connector/multirequest/multirequestOperationRegistry.xhtml",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.перешел_на_страницу(String)"
});
formatter.result({
  "duration": 494351777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Создать запрос",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "duration": 130972631,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Обязательность поля \"Фамилия\" для доступа к ВС «Запрос общедоступной информации из БД ИП ФССП»",
  "description": "",
  "id": "«запрос-общедоступной-информации-из-бд-ип-фссп»-для-сервиса-«мультизапрос»-под-пользователем-kpduser;обязательность-поля-\"фамилия\"-для-доступа-к-вс-«запрос-общедоступной-информации-из-бд-ип-фссп»",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 27,
      "name": "@success"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "пользователь заполнил 2 поля",
  "rows": [
    {
      "cells": [
        "Название",
        "Значение"
      ],
      "line": 30
    },
    {
      "cells": [
        "Имя",
        "Имя"
      ],
      "line": 31
    },
    {
      "cells": [
        "Регион регистрации",
        "12"
      ],
      "line": 32
    }
  ],
  "keyword": "Когда "
});
formatter.step({
  "line": 33,
  "name": "В блоке \"Доступные виды сведений для Мультизапроса\" отсутствует строка: \"ФССП. Запрос общедоступной информации из базы данных исполнительных производств\"",
  "keyword": "Тогда "
});
formatter.match({
  "location": "MyStepdefs.пользователь_заполнил_2_поля(DataTable)"
});
formatter.result({
  "duration": 793567274,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 992791798,
  "status": "passed"
});
formatter.before({
  "duration": 3633009349,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Предыстория"
});
formatter.step({
  "line": 6,
  "name": "пользователь авторизован под KpdUser",
  "keyword": "Допустим "
});
formatter.step({
  "line": 7,
  "name": "перешел на страницу \"/views/connector/multirequest/multirequestOperationRegistry.xhtml\"",
  "keyword": "И "
});
formatter.step({
  "line": 8,
  "name": "пользователь нажал на кнопку \"Создать запрос\"",
  "keyword": "И "
});
formatter.match({
  "location": "MyStepdefs.пользователь_авторизован_под_KpdUser()"
});
formatter.result({
  "duration": 1908824106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/views/connector/multirequest/multirequestOperationRegistry.xhtml",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.перешел_на_страницу(String)"
});
formatter.result({
  "duration": 541911383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Создать запрос",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "duration": 196579894,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Обязательность поля \"Имя\" для доступа к ВС «Запрос общедоступной информации из БД ИП ФССП»",
  "description": "",
  "id": "«запрос-общедоступной-информации-из-бд-ип-фссп»-для-сервиса-«мультизапрос»-под-пользователем-kpduser;обязательность-поля-\"имя\"-для-доступа-к-вс-«запрос-общедоступной-информации-из-бд-ип-фссп»",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 35,
      "name": "@success"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "пользователь заполнил 2 поля",
  "rows": [
    {
      "cells": [
        "Название",
        "Значение"
      ],
      "line": 38
    },
    {
      "cells": [
        "Фамилия",
        "Фамилия"
      ],
      "line": 39
    },
    {
      "cells": [
        "Регион регистрации",
        "12"
      ],
      "line": 40
    }
  ],
  "keyword": "Когда "
});
formatter.step({
  "line": 41,
  "name": "В блоке \"Доступные виды сведений для Мультизапроса\" отсутствует строка: \"ФССП. Запрос общедоступной информации из базы данных исполнительных производств\"",
  "keyword": "Тогда "
});
formatter.match({
  "location": "MyStepdefs.пользователь_заполнил_2_поля(DataTable)"
});
formatter.result({
  "duration": 923215474,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1602848231,
  "status": "passed"
});
formatter.before({
  "duration": 3955250400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Предыстория"
});
formatter.step({
  "line": 6,
  "name": "пользователь авторизован под KpdUser",
  "keyword": "Допустим "
});
formatter.step({
  "line": 7,
  "name": "перешел на страницу \"/views/connector/multirequest/multirequestOperationRegistry.xhtml\"",
  "keyword": "И "
});
formatter.step({
  "line": 8,
  "name": "пользователь нажал на кнопку \"Создать запрос\"",
  "keyword": "И "
});
formatter.match({
  "location": "MyStepdefs.пользователь_авторизован_под_KpdUser()"
});
formatter.result({
  "duration": 2100994521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/views/connector/multirequest/multirequestOperationRegistry.xhtml",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.перешел_на_страницу(String)"
});
formatter.result({
  "duration": 545944972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Создать запрос",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "duration": 144973300,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Создание запроса в «ФССП. Запрос общедоступной информации из базы данных исполнительных производств»",
  "description": "",
  "id": "«запрос-общедоступной-информации-из-бд-ип-фссп»-для-сервиса-«мультизапрос»-под-пользователем-kpduser;создание-запроса-в-«фссп.-запрос-общедоступной-информации-из-базы-данных-исполнительных-производств»",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 43,
      "name": "@success"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "пользователь заполнил 3 поля",
  "rows": [
    {
      "cells": [
        "Название",
        "Значение"
      ],
      "line": 46
    },
    {
      "cells": [
        "Фамилия",
        "Фамилия"
      ],
      "line": 47
    },
    {
      "cells": [
        "Имя",
        "Имя"
      ],
      "line": 48
    },
    {
      "cells": [
        "Регион регистрации",
        "12"
      ],
      "line": 49
    }
  ],
  "keyword": "Когда "
});
formatter.step({
  "line": 50,
  "name": "переместил из блока \"Доступные виды сведений для Мультизапроса\" строку \"ФССП. Запрос общедоступной информации из базы данных исполнительных производств\" в блок \"Выбранные виды сведений для Мультизапроса\"",
  "keyword": "И "
});
formatter.step({
  "line": 51,
  "name": "пользователь нажал на кнопку \"Сохранить\"",
  "keyword": "И "
});
formatter.step({
  "line": 52,
  "name": "пользователь нажал на кнопку \"Отправить\"",
  "keyword": "И "
});
formatter.step({
  "line": 53,
  "name": "происходит переход на вкладку \"Данные ответа\"",
  "keyword": "Тогда "
});
formatter.step({
  "line": 54,
  "name": "блок \"Проверка благонадежности\" развёрнут",
  "keyword": "И "
});
formatter.step({
  "line": 55,
  "name": "в блоке \"Проверка благонадежности\" присутствует строка \"Ответ от ФССП\"",
  "keyword": "И "
});
formatter.step({
  "line": 56,
  "name": "строка \"Ответ от ФССП\" заполняется данными ответа",
  "keyword": "И "
});
formatter.match({
  "location": "MyStepdefs.пользователь_заполнил_3_поля(DataTable)"
});
formatter.result({
  "duration": 1380394339,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Сохранить",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Отправить",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1227482567,
  "status": "passed"
});
formatter.before({
  "duration": 3507185282,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Предыстория"
});
formatter.step({
  "line": 6,
  "name": "пользователь авторизован под KpdUser",
  "keyword": "Допустим "
});
formatter.step({
  "line": 7,
  "name": "перешел на страницу \"/views/connector/multirequest/multirequestOperationRegistry.xhtml\"",
  "keyword": "И "
});
formatter.step({
  "line": 8,
  "name": "пользователь нажал на кнопку \"Создать запрос\"",
  "keyword": "И "
});
formatter.match({
  "location": "MyStepdefs.пользователь_авторизован_под_KpdUser()"
});
formatter.result({
  "duration": 1930731159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/views/connector/multirequest/multirequestOperationRegistry.xhtml",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.перешел_на_страницу(String)"
});
formatter.result({
  "duration": 579524361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Создать запрос",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "duration": 119317573,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Отсутствует возможность отправить запрос к ВС «Запрос общедоступной информации из БД ИП ФССП» если удалить поле \"Код региона\"",
  "description": "",
  "id": "«запрос-общедоступной-информации-из-бд-ип-фссп»-для-сервиса-«мультизапрос»-под-пользователем-kpduser;отсутствует-возможность-отправить-запрос-к-вс-«запрос-общедоступной-информации-из-бд-ип-фссп»-если-удалить-поле-\"код-региона\"",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 58,
      "name": "@success"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "пользователь заполнил 3 поля",
  "rows": [
    {
      "cells": [
        "Название",
        "Значение"
      ],
      "line": 61
    },
    {
      "cells": [
        "Фамилия",
        "Фамилия"
      ],
      "line": 62
    },
    {
      "cells": [
        "Имя",
        "Имя"
      ],
      "line": 63
    },
    {
      "cells": [
        "Регион регистрации",
        "12"
      ],
      "line": 64
    }
  ],
  "keyword": "Когда "
});
formatter.step({
  "line": 65,
  "name": "переместил из блока \"Доступные виды сведений для Мультизапроса\" строку \"ФССП. Запрос общедоступной информации из базы данных исполнительных производств\" в блок \"Выбранные виды сведений для Мультизапроса\"",
  "keyword": "И "
});
formatter.step({
  "line": 66,
  "name": "пользователь нажал на кнопку \"Сохранить\"",
  "keyword": "И "
});
formatter.step({
  "line": 67,
  "name": "пользователь нажал на кнопку \"Отправить\"",
  "keyword": "И "
});
formatter.step({
  "line": 68,
  "name": "удалил значение из поля \"Регион регистрации\"",
  "keyword": "И "
});
formatter.step({
  "line": 69,
  "name": "В блоке \"Доступные виды сведений для Мультизапроса\" отсутствует строка: \"ФССП. Запрос общедоступной информации из базы данных исполнительных производств\"",
  "keyword": "Тогда "
});
formatter.match({
  "location": "MyStepdefs.пользователь_заполнил_3_поля(DataTable)"
});
formatter.result({
  "duration": 1185147690,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Сохранить",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Отправить",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1356156134,
  "status": "passed"
});
formatter.before({
  "duration": 3639976008,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Предыстория"
});
formatter.step({
  "line": 6,
  "name": "пользователь авторизован под KpdUser",
  "keyword": "Допустим "
});
formatter.step({
  "line": 7,
  "name": "перешел на страницу \"/views/connector/multirequest/multirequestOperationRegistry.xhtml\"",
  "keyword": "И "
});
formatter.step({
  "line": 8,
  "name": "пользователь нажал на кнопку \"Создать запрос\"",
  "keyword": "И "
});
formatter.match({
  "location": "MyStepdefs.пользователь_авторизован_под_KpdUser()"
});
formatter.result({
  "duration": 1964058780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/views/connector/multirequest/multirequestOperationRegistry.xhtml",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.перешел_на_страницу(String)"
});
formatter.result({
  "duration": 518098787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Создать запрос",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "duration": 314188331,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Создание запроса в «ФССП. Запрос общедоступной информации из базы данных исполнительных производств» с заполнением всех полей",
  "description": "",
  "id": "«запрос-общедоступной-информации-из-бд-ип-фссп»-для-сервиса-«мультизапрос»-под-пользователем-kpduser;создание-запроса-в-«фссп.-запрос-общедоступной-информации-из-базы-данных-исполнительных-производств»-с-заполнением-всех-полей",
  "type": "scenario",
  "keyword": "Сценарий",
  "tags": [
    {
      "line": 71,
      "name": "@success"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "пользователь заполнил 18 полей",
  "rows": [
    {
      "cells": [
        "Название",
        "Значение"
      ],
      "line": 74
    },
    {
      "cells": [
        "Фамилия",
        "ТестоваяФамилия"
      ],
      "line": 75
    },
    {
      "cells": [
        "Имя",
        "ТестовоеИмя"
      ],
      "line": 76
    },
    {
      "cells": [
        "Отчество",
        "ТестовоеОтчество"
      ],
      "line": 77
    },
    {
      "cells": [
        "Дата рождения",
        "10.10.2000"
      ],
      "line": 78
    },
    {
      "cells": [
        "СНИЛС",
        "47375161204"
      ],
      "line": 79
    },
    {
      "cells": [
        "ИНН",
        "123456789012"
      ],
      "line": 80
    },
    {
      "cells": [
        "Серия паспорта",
        "1234"
      ],
      "line": 81
    },
    {
      "cells": [
        "Номер паспорта",
        "123123"
      ],
      "line": 82
    },
    {
      "cells": [
        "Дата выдачи",
        "10.10.2018"
      ],
      "line": 83
    },
    {
      "cells": [
        "Код подразделения",
        "160009"
      ],
      "line": 84
    },
    {
      "cells": [
        "Регион запроса",
        "12"
      ],
      "line": 85
    },
    {
      "cells": [
        "Регион регистрации",
        "01"
      ],
      "line": 86
    },
    {
      "cells": [
        "Населённый пункт",
        "Казань"
      ],
      "line": 87
    },
    {
      "cells": [
        "Улица",
        "Пушкина"
      ],
      "line": 88
    },
    {
      "cells": [
        "Дом",
        "1"
      ],
      "line": 89
    },
    {
      "cells": [
        "Корпус",
        "б"
      ],
      "line": 90
    },
    {
      "cells": [
        "Кваритра",
        "324"
      ],
      "line": 91
    },
    {
      "cells": [
        "Номер мобильного телефона",
        "9869130101"
      ],
      "line": 92
    }
  ],
  "keyword": "Когда "
});
formatter.step({
  "line": 93,
  "name": "установил чек-бокс \"Гражданин является пенсионером\"",
  "keyword": "И "
});
formatter.step({
  "line": 94,
  "name": "загрузил \"Копия пасспорта в электронном виде\"",
  "keyword": "И "
});
formatter.step({
  "line": 95,
  "name": "переместил из блока все доступные ВС нажатием кнопки \"Добавить все\"",
  "keyword": "И "
});
formatter.step({
  "line": 96,
  "name": "пользователь нажал на кнопку \"Сохранить\"",
  "keyword": "И "
});
formatter.step({
  "line": 97,
  "name": "пользователь нажал на кнопку \"Отправить\"",
  "keyword": "И "
});
formatter.step({
  "line": 98,
  "name": "происходит переход на вкладку \"Данные ответа\"",
  "keyword": "Тогда "
});
formatter.step({
  "line": 99,
  "name": "блок \"Проверка благонадежности\" развёрнут",
  "keyword": "И "
});
formatter.step({
  "line": 100,
  "name": "в блоке \"Проверка благонадежности\" присутствует строка \"Ответ от ФССП\"",
  "keyword": "И "
});
formatter.step({
  "line": 101,
  "name": "строка \"Ответ от ФССП\" заполняется данными ответа",
  "keyword": "И "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Сохранить",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Отправить",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.пользователь_нажал_на_кнопку(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1640381518,
  "status": "passed"
});
});