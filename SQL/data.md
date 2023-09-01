```sql
-- 算術演算子　+-*/%
SELECT 1 + 1;
SELECT 1 - 1;
SELECT  3 * 5;
SELECT 10 / 3;
SELECT 10 % 3;

SELECT name, age, age + 3 from users limit 10; -- SELECT 分で取得した結果に計算をすることも可能(ageを+3している)
SELECT age-1 AS age_1 from users;　-- マイナスすることも可能
SELECT birth_day, birth_day+3 from users;-- 日付型への算術も可能
SELECT  department, name, salary, salary*1.1 AS sakary_next_year from employees;-- 給料を1,1倍にして表示

-- 文字の連結
SELECT CONCAT(department, ":", name) AS "部署：名前" FROM employees;	-- 取得結果を連携している　　また、カラム名意外に文字列も間に挟むなどして連結もできる
SELECT CONCAT(name, " (", age, ")") AS "名前：年齢" from users;		-- 取得結果を連携している　　また、カラム名意外に文字列も間に挟むなどして連結もできる

-- 日付の取得
SELECT NOW();　-- 現在日時を取得(時間含む)
SELECT NOW(), name, age from users;　-- 関数とカラムを混在する事も狩野
SELECT CURDATE(); -- 現在日付のみ(時間含まない) 
SELECT DATE_FORMAT(NOW(), "%y/%m/%d %H:%i");　　-- 分は%iで表現する / 24時間表現は%Hで表現する
```
