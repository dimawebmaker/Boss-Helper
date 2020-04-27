const DefaultSettings = {
    "enabled":  true,
    "alerted":  true, // 屏中警告提示
    "notice":   true, // 团长通知提示
    "party":   false, // 真实队长通知
    "messager": true, // 公告消息记录
    "marker":   true, // 光柱提示物标记
    "itemId":  88704, // 貝利卡宴會紀念幣
    "bosses": [
        {huntingZoneId: 10,   templateId:       99, name: "(Змеиный остров) Шашарак"},
        {huntingZoneId: 4,    templateId:     5011, name: "(Взрыв) Буря Канаш"},
        {huntingZoneId: 38,   templateId:       35, name: "(Древний) даже коллапс Swag"},
        {huntingZoneId: 57,   templateId:       33, name: "(Люк) Качастан"},
        {huntingZoneId: 51,   templateId:     7011, name: "(Паук) Лачиноя "},
        {huntingZoneId: 52,   templateId:     9050, name: "(Ящерица) Внутренний боевой отдел"},
        {huntingZoneId: 1023, templateId:     3000, name: "(Ивент) Призрак Доливена"},
        {huntingZoneId: 1023, templateId: 20150805, name: "(Ивент) Призрак Доливена"},
        {huntingZoneId: 1023, templateId: 88888888, name: "(Ивент) Сундук с сокровищами"},
        {huntingZoneId: 1023, templateId: 88888889, name: "(Ивент) Сундук с сокровищами"},
        {huntingZoneId: 1023, templateId:   160341, name: "(Событие) Санта"},
        {huntingZoneId: 1023, templateId: 99999997, name: "(Событие) Жадный Санта"},
        {huntingZoneId: 1023, templateId: 99999998, name: "(Ивент) Скупой Санта"},
        {huntingZoneId: 1023, templateId: 99999991, name: "(Ивент) Синус Яичный вор"},
        {huntingZoneId: 1023, templateId: 99999992, name: "(Ивент) Синус Яичный вор"},
        {huntingZoneId: 1023, templateId: 99999999, name: "(Ивент) Синус Яичный вор"},
        {huntingZoneId:  183, templateId:     6002, name: "(Ивент) Эрдроп"},
/* ==== 亚伦南部 ======================================================================================== */
        {huntingZoneId:   2, templateId: 1271, name: "[Аркадия]Лесоруб(огород свиней)"},
        {huntingZoneId:   3, templateId: 1271, name: "[Аркадия]Лесоруб(лагерь возле лошадей скелетов)"},
        {huntingZoneId:   5, templateId: 1271, name: "[Аркадия]Лесоруб(пост у туванаг)"},
        {huntingZoneId:   6, templateId: 1271, name: "[Аркадия]Лесоруб(первый пост олени)"},
        {huntingZoneId:   7, templateId: 1271, name: "[Аркадия]Лесоруб(пост кабаны и медведи последний)"},
        {huntingZoneId:   4, templateId: 1271, name: "[Каст-бухт]Каст(тп акаши)"},
        {huntingZoneId:   9, templateId: 1271, name: "[Каст-бухт]Каст(пост возле сараваша)"},
        {huntingZoneId:  10, templateId: 1271, name: "[Каст-бухт]Каст(вроде на острове)"},
        {huntingZoneId:  11, templateId: 1271, name: "[Каст-бухт]Каст(бухта головорезов)"},
        {huntingZoneId:  12, templateId: 1271, name: "[Каст-бухт]Каст(бухта пост крабы)"},
        {huntingZoneId:  15, templateId: 1271, name: "[пополион]попо(пост перед фамберлиск)"},
        {huntingZoneId:  16, templateId: 1271, name: "[пополион]попо(пост перед кошмар замком)"},
        {huntingZoneId:  17, templateId: 1271, name: "[пополион]попо(пополион пост внизу справа)"},
        {huntingZoneId:  23, templateId: 1271, name: "[пополион]попо(пораэлину пост справа от взлётной площадки)"},
        {huntingZoneId:  18, templateId: 1271, name: "[чебика]чебика(внизу круг дорога пост по середине)"},
        {huntingZoneId:  19, templateId: 1271, name: "[чебика]чебика(бамарама арена)"},
        {huntingZoneId:  21, templateId: 1271, name: "[чебика]чебика(чебика где то внизу)"},
        {huntingZoneId:  24, templateId: 1271, name: "[чебика]тулуфан(верхняя полоска)"},
/* ==== 夏拉南部 ======================================================================================== */
        {huntingZoneId:  26, templateId: 1271, name: "[трия-трал]тралион(пост у оленей)"},
        {huntingZoneId:  27, templateId: 1271, name: "[трия-трал]трия(платформа у гпн)"},
        {huntingZoneId:  28, templateId: 1271, name: "[трия-трал]трия(пост возле боссов пауков)"},
        {huntingZoneId:  29, templateId: 1271, name: "[трия-трал]трия(пост возле повстанцев, там ещё верёвочный мост)"},
        {huntingZoneId:  30, templateId: 1271, name: "[бастион]бастион(внизу слева)"},
        {huntingZoneId:  31, templateId: 1271, name: "[акарум]акарум(начало нижней дороги к шпилю)"},
        {huntingZoneId:  32, templateId: 1271, name: "[акарум]акарум(пост в горах где нпс сопровождали)"},
        {huntingZoneId:  34, templateId: 1271, name: "[акарум]акарум(Блеклый камень)"},
        {huntingZoneId:  35, templateId: 1271, name: "[эленея]эленея(эленея круг справа внизу пост)"},
        {huntingZoneId:  36, templateId: 1271, name: "[эленея]эленея(пост посередине левее карта гре три полоски внизу вилка)"},
        {huntingZoneId:  38, templateId: 1271, name: "[эленея]эленея(пост где в ямах колобки боссы)"},
        {huntingZoneId:  40, templateId: 1271, name: "[фронтира]фронтира(между двух кругов пост)"},
        {huntingZoneId:  41, templateId: 1271, name: "[фронтира]фронтира(пост возле пещеры пауков)"},
/* ==== 夏拉北部 ======================================================================================== */
        {huntingZoneId:  45, templateId: 1271, name: "[следопыт]следопыт(возле входа в три бащни)"},
        {huntingZoneId:  47, templateId: 1271, name: "[следопыт]следопыт(пост медведи)"},
        {huntingZoneId:  48, templateId: 1271, name: "[зулфик]зулфик(в городе)"},
        {huntingZoneId:  49, templateId: 1271, name: "[канстри]канстри(карта манаи в самом низу лева пост)"},
        {huntingZoneId:  50, templateId: 1271, name: "[Канстрия]Канстрия(солнышко)"},
        {huntingZoneId:  51, templateId: 1271, name: "[хабер]хабер(по пути к ебени перваый пост дорога вниз)"},
        {huntingZoneId:  52, templateId: 1271, name: "[хабер]хабер(в городе или наверху по дуге)"},
        {huntingZoneId:  54, templateId: 1271, name: "[фей]фей(в городе)"},
        {huntingZoneId:  55, templateId: 1271, name: "[фей]фей(драгонфол город)"},
        {huntingZoneId:  56, templateId: 1271, name: "[фей]фей(пост где на горе табличка)"},
        {huntingZoneId:  57, templateId: 1271, name: "[фей]фей(пост за фармом мобов)"},
/* ===== 亚伦北部 ======================================================================================= */
        {huntingZoneId: 172, templateId: 1271, name: "[60+зона]60+зона(пост после обезьян)"},
        {huntingZoneId: 181, templateId: 1271, name: "[60+зона]60+зона(пост золотые деревья, ящерицы)"},
        {huntingZoneId: 182, templateId: 1271, name: "[60+зона]60+зона(пост олени)"},
        {huntingZoneId: 183, templateId: 1278, name: "[60+зона]60+зона(по дороге из дозора вниз по пути к дурику)"},
        {huntingZoneId: 191, templateId: 1271, name: "[60+зона]60+зона(пост дириков или возле мяса)"},
/* ==== 保護領地 ======================================================================================== */
        {huntingZoneId:  13, templateId: 1271, name: "[остр зари]巴勒圖(黎明庭園)"},
/* ==== 直辖領地 ======================================================================================== */
        {huntingZoneId:  63, templateId: 1278, name: "[окрест велики]貝拉昆(貝利卡近郊)"},
        {huntingZoneId:  72, templateId: 1278, name: "[окрест велики]阿爾魯瑪(爾雷曼西亞近郊)"},
        {huntingZoneId:  84, templateId: 1278, name: "[окрест велики]凱依德拉(凱亞多勒近郊)"},
/* ==== 神秘商店 ======================================================================================== */
        {huntingZoneId:  63, templateId: 1271, name: "Тайный Магазин (Белица-1)"},
        {huntingZoneId:  63, templateId: 1279, name: "Тайный Магазин (Белица-2)"},
        {huntingZoneId:  72, templateId: 1271, name: "Тайный Магазин (алемент)"},
        {huntingZoneId:  84, templateId: 1271, name: "окраины кайатор"},
        {huntingZoneId: 183, templateId: 1271, name: "дозор нпс"},
/* ==== 交付哥布林 ====================================================================================== */
        {huntingZoneId:  63, templateId: 1276, logTime: 0, name: "1-нпс в городе"},
        {huntingZoneId:  63, templateId: 1284,             name: "1-нпс в городек"},
        {huntingZoneId:  84, templateId: 1276, logTime: 0, name: "2-нпс в городе"},
        {huntingZoneId:  72, templateId: 1276, logTime: 0, name: "3-нпс в городе"},
        {huntingZoneId: 183, templateId: 1276, logTime: 0, name: "4-нпс в городе"},
/* ==== 世界BOSS ======================================================================================== */
        {huntingZoneId:  26, templateId: 5001, logTime: 0, name: "Олетан (Долина Жизни)"},
        {huntingZoneId:  39, templateId:  501, logTime: 0, name: "Хагарат (Деревня Пионеров)"},
        {huntingZoneId:  51, templateId: 4001, logTime: 0, name: "Герлос (Деревня Надежды)"},
/* ==== 公会BOSS ======================================================================================== */
        {huntingZoneId:  29, templateId: 2001, name: "貪婪的阿嵐夏(торгаш в трия где сумка)"},
        {huntingZoneId:  34, templateId: 2002, name: "憤怒的卡魯古斯(акарум пост где то вризу)"},
        {huntingZoneId:  34, templateId: 2003, name: "憤怒的煞布拉尼惡(акарум тоже вризу)"},
        {huntingZoneId: 152, templateId: 2001, name: "Жадная алансия (Белика: времена войны) 152-2001"},
        {huntingZoneId: 152, templateId: 2002, name: "Злой Каругус (Белика: время войны) 152-2002"},
        {huntingZoneId: 152, templateId: 2003, name: "Злобная Шаблани (Белика: время войны) 152-2003"},
        {huntingZoneId: 152, templateId: 7001, name: "Жадная алансия (Белика: времена войны) 152-7001"},
        {huntingZoneId: 152, templateId: 7002, name: "Злой Каругус (Белика: времена войны) 152-7002"},
        {huntingZoneId: 152, templateId: 7003, name: "Злобный Шаблани (Белика: Эпоха войны) 152-7003"},
/* ==== 空岛稀有 ======================================================================================== */
        {huntingZoneId: 2020, templateId: 1100, name: "Пустой остров (Казармы / Продвинутый-Средний) -Высокое Дракона"},
        {huntingZoneId: 2020, templateId: 1101, name: "Пустой остров (Казармы / Продвинутый-Нижний) -Гао Длинный тактический сторонник"},
        {huntingZoneId: 2020, templateId: 1102, name: "空岛(兵营/高階-上)-高龍制壓者"},
        {huntingZoneId: 2020, templateId: 1200, name: "空岛(卢地/精銳-下)-那伽神官"},
        {huntingZoneId: 2020, templateId: 1201, name: "空岛(卢地/精銳-上)-那伽騎士"},
        {huntingZoneId: 2020, templateId: 1202, name: "空岛(卢地/精銳-中)-那伽執行官"},
        {huntingZoneId: 2020, templateId: 1300, name: "空岛(猴子)-馬努克"},
        {huntingZoneId: 2020, templateId: 1400, name: "空岛(蜘蛛)-埃席爾洛普"},
        {huntingZoneId: 2020, templateId: 1500, name: "空岛(蜥蜴)-傑梅西斯"},
        {huntingZoneId: 2020, templateId: 1600, name: "空岛(螃蟹)-紅色苔蘚螃蟹"},
        {huntingZoneId: 2020, templateId: 1601, name: "空岛(蚂蚁)-獨眼食腐獸"},
        {huntingZoneId: 2020, templateId: 1700, name: "空岛(肥虫)-佩奇斯"}
    ]
}

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) {
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings)
    } else if (from_ver === null) {
        // No config file exists, use default settings
        return DefaultSettings
    } else {
        // Migrate from older version (using the new system) to latest one
        if (from_ver + 1 < to_ver) { // Recursively upgrade in one-version steps
            settings = MigrateSettings(from_ver, from_ver + 1, settings)
            return MigrateSettings(from_ver + 1, to_ver, settings)
        }
        // If we reach this point it's guaranteed that from_ver === to_ver - 1, so we can implement
        // a switch for each version step that upgrades to the next version. This enables us to
        // upgrade from any version to the latest version without additional effort!
        switch (to_ver) {
            default:
                let oldsettings = settings
                settings = Object.assign(DefaultSettings, {})
                for (let option in oldsettings) {
                    if (settings[option]) {
                        settings[option] = oldsettings[option]
                    }
                }
                break
        }
        return settings
    }
}
