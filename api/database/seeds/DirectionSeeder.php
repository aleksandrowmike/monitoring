<?php

use App\Direction;
use Illuminate\Database\Seeder;

class DirectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Direction::create( [
            'id'=>1,
            'title'=>'Педагогическое образование / Дошкольное образование',
            'code'=>'44.03.01',
            'department_id'=>4,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>2,
            'title'=>'Педагогическое образование / Начальное образование',
            'code'=>'44.03.01',
            'department_id'=>4,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>3,
            'title'=>'Психолого-педагогическое образование / Психология и социальная педагогика',
            'code'=>'44.03.02',
            'department_id'=>3,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>4,
            'title'=>'Социальная работа / Социально-технологическая и организационно-управленческая деятельность в сфере социальной защиты населения',
            'code'=>'39.03.02',
            'department_id'=>3,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>5,
            'title'=>'Туризм / Экскурсионная деятельность',
            'code'=>'43.03.02',
            'department_id'=>3,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>6,
            'title'=>'Педагогическое образование / Информатика',
            'code'=>'44.03.01',
            'department_id'=>6,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>7,
            'title'=>'Педагогическое образование / Математика',
            'code'=>'44.03.01',
            'department_id'=>6,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>8,
            'title'=>'Прикладная информатика / Системное и прикладное программирование',
            'code'=>'09.03.03',
            'department_id'=>6,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>9,
            'title'=>'Зарубежное регионоведение ',
            'code'=>'41.03.01',
            'department_id'=>12,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>10,
            'title'=>'Зарубежное регионоведение / Программа подготовки офицеров',
            'code'=>'41.03.01',
            'department_id'=>12,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>11,
            'title'=>'История ',
            'code'=>'46.03.01',
            'department_id'=>12,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>12,
            'title'=>'Международные отношения ',
            'code'=>'41.03.05',
            'department_id'=>12,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>13,
            'title'=>'Политология ',
            'code'=>'41.03.04',
            'department_id'=>12,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>14,
            'title'=>'Реклама и связи с общественностью ',
            'code'=>'42.03.01',
            'department_id'=>12,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>15,
            'title'=>'Туризм ',
            'code'=>'43.03.02',
            'department_id'=>12,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>16,
            'title'=>'Педагогическое образование / Иностранный язык ',
            'code'=>'44.03.01',
            'department_id'=>2,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>17,
            'title'=>'Педагогическое образование / Иностранный язык ',
            'code'=>'44.03.01',
            'department_id'=>2,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>18,
            'title'=>'Педагогическое образование / История',
            'code'=>'44.03.01',
            'department_id'=>2,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>19,
            'title'=>'Педагогическое образование / Русский язык как иностранный',
            'code'=>'44.03.01',
            'department_id'=>2,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>20,
            'title'=>'Биология ',
            'code'=>'06.03.01',
            'department_id'=>10,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>21,
            'title'=>'Экология и природопользование ',
            'code'=>'05.03.06',
            'department_id'=>10,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>22,
            'title'=>'Педагогическое образование / Биология',
            'code'=>'44.03.01',
            'department_id'=>1,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>23,
            'title'=>'Педагогическое образование / Физическая культура',
            'code'=>'44.03.01',
            'department_id'=>1,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>24,
            'title'=>'Педагогическое образование / Химия',
            'code'=>'44.03.01',
            'department_id'=>1,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>25,
            'title'=>'Физическая культура / Менеджмент в сфере физической культуры',
            'code'=>'49.03.01',
            'department_id'=>1,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>26,
            'title'=>'Государственное и муниципальное управление ',
            'code'=>'38.03.04',
            'department_id'=>9,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>27,
            'title'=>'Менеджмент ',
            'code'=>'38.03.02',
            'department_id'=>9,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>28,
            'title'=>'Прикладная информатика ',
            'code'=>'09.03.03',
            'department_id'=>9,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>29,
            'title'=>'Реклама и связи с общественностью ',
            'code'=>'42.03.01',
            'department_id'=>9,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>30,
            'title'=>'Экономика ',
            'code'=>'38.03.01',
            'department_id'=>9,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>31,
            'title'=>'Юриспруденция ',
            'code'=>'40.03.01',
            'department_id'=>9,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>32,
            'title'=>'Государственное и муниципальное управление ',
            'code'=>'38.03.04',
            'department_id'=>7,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>33,
            'title'=>'Прикладная информатика ',
            'code'=>'09.03.03',
            'department_id'=>7,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>34,
            'title'=>'Электроэнергетика и электротехника ',
            'code'=>'13.03.02',
            'department_id'=>7,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>35,
            'title'=>'Математика ',
            'code'=>'01.03.01',
            'department_id'=>11,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>36,
            'title'=>'Механика и математическое моделирование ',
            'code'=>'01.03.03',
            'department_id'=>11,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>37,
            'title'=>'Прикладная информатика ',
            'code'=>'09.03.03',
            'department_id'=>11,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>38,
            'title'=>'Прикладная математика и информатика ',
            'code'=>'01.03.02',
            'department_id'=>11,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>39,
            'title'=>'Программная инженерия ',
            'code'=>'09.03.04',
            'department_id'=>11,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>40,
            'title'=>'Фундаментальная информатика и информационные технологии ',
            'code'=>'02.03.02',
            'department_id'=>11,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>41,
            'title'=>'Государственное и муниципальное управление / Управление муниципальным хозяйством',
            'code'=>'38.03.04',
            'department_id'=>5,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>42,
            'title'=>'Менеджмент / Управление предпринимательской деятельностью',
            'code'=>'38.03.02',
            'department_id'=>5,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>43,
            'title'=>'Экономика / Экономика и бухгалтерский учет',
            'code'=>'38.03.01',
            'department_id'=>5,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>44,
            'title'=>'Экономика / Экономика и финансы организаций ',
            'code'=>'38.03.01',
            'department_id'=>5,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>45,
            'title'=>'Юриспруденция / Гражданское право и процесс',
            'code'=>'40.03.01',
            'department_id'=>5,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>46,
            'title'=>'Юриспруденция / Уголовное право и процесс',
            'code'=>'40.03.01',
            'department_id'=>5,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>47,
            'title'=>'Физика ',
            'code'=>'03.03.02',
            'department_id'=>8,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>48,
            'title'=>'Рекреация и спортивно-оздоровительный туризм ',
            'code'=>'49.03.03',
            'department_id'=>19,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>49,
            'title'=>'Физическая культура ',
            'code'=>'49.03.01',
            'department_id'=>19,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>50,
            'title'=>'Информационные системы и технологии ',
            'code'=>'09.03.02',
            'department_id'=>20,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>51,
            'title'=>'Нанотехнологии и микросистемная техника ',
            'code'=>'28.03.01',
            'department_id'=>20,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>52,
            'title'=>'Физика ',
            'code'=>'03.03.02',
            'department_id'=>20,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>53,
            'title'=>'Электроника и наноэлектроника ',
            'code'=>'11.03.04',
            'department_id'=>20,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>54,
            'title'=>'Бизнес-информатика ',
            'code'=>'38.03.05',
            'department_id'=>15,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>55,
            'title'=>'Гостиничное дело ',
            'code'=>'43.03.03',
            'department_id'=>15,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>56,
            'title'=>'Государственное и муниципальное управление ',
            'code'=>'38.03.04',
            'department_id'=>15,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>57,
            'title'=>'Менеджмент ',
            'code'=>'38.03.02',
            'department_id'=>15,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>58,
            'title'=>'Прикладная информатика ',
            'code'=>'09.03.03',
            'department_id'=>15,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>59,
            'title'=>'Торговое дело ',
            'code'=>'38.03.06',
            'department_id'=>15,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>60,
            'title'=>'Туризм ',
            'code'=>'43.03.02',
            'department_id'=>15,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>61,
            'title'=>'Управление персоналом ',
            'code'=>'38.03.03',
            'department_id'=>15,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>62,
            'title'=>'Экономика ',
            'code'=>'38.03.01',
            'department_id'=>15,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>63,
            'title'=>'Юриспруденция ',
            'code'=>'40.03.01',
            'department_id'=>15,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>64,
            'title'=>'Документоведение и архивоведение ',
            'code'=>'46.03.02',
            'department_id'=>22,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>65,
            'title'=>'Юриспруденция ',
            'code'=>'40.03.01',
            'department_id'=>22,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>66,
            'title'=>'Журналистика ',
            'code'=>'42.03.02',
            'department_id'=>14,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>67,
            'title'=>'Издательское дело ',
            'code'=>'42.03.03',
            'department_id'=>14,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>68,
            'title'=>'Реклама и связи с общественностью ',
            'code'=>'42.03.01',
            'department_id'=>14,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>69,
            'title'=>'Филология ',
            'code'=>'45.03.01',
            'department_id'=>14,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>70,
            'title'=>'Химия ',
            'code'=>'04.03.01',
            'department_id'=>21,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>71,
            'title'=>'Конфликтология ',
            'code'=>'37.03.02',
            'department_id'=>18,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>72,
            'title'=>'Менеджмент ',
            'code'=>'38.03.02',
            'department_id'=>18,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>73,
            'title'=>'Психология ',
            'code'=>'37.03.01',
            'department_id'=>18,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>74,
            'title'=>'Социальная работа ',
            'code'=>'39.03.02',
            'department_id'=>18,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>75,
            'title'=>'Социология ',
            'code'=>'39.03.01',
            'department_id'=>18,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>76,
            'title'=>'Управление персоналом ',
            'code'=>'38.03.03',
            'department_id'=>18,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>77,
            'title'=>'Государственное и муниципальное управление ',
            'code'=>'38.03.04',
            'department_id'=>16,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>78,
            'title'=>'Менеджмент ',
            'code'=>'38.03.02',
            'department_id'=>16,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>79,
            'title'=>'Прикладная информатика ',
            'code'=>'09.03.03',
            'department_id'=>16,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>80,
            'title'=>'Экономика ',
            'code'=>'38.03.01',
            'department_id'=>16,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>81,
            'title'=>'Юриспруденция ',
            'code'=>'40.03.01',
            'department_id'=>16,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>82,
            'title'=>'Радиофизика ',
            'code'=>'03.03.03',
            'department_id'=>17,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>83,
            'title'=>'Фундаментальная информатика и информационные технологии ',
            'code'=>'02.03.02',
            'department_id'=>17,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>84,
            'title'=>'Педагогика и психология девиантного поведения / Психолого-педагогическая профилактика девиантного поведения',
            'code'=>'44.05.01',
            'department_id'=>3,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>85,
            'title'=>'Психология служебной деятельности / Морально-психологическое обеспечение служебной деятельности',
            'code'=>'37.05.02',
            'department_id'=>3,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>86,
            'title'=>'Лечебное дело ',
            'code'=>'31.05.01',
            'department_id'=>10,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>87,
            'title'=>'Медицинская биофизика ',
            'code'=>'30.05.02',
            'department_id'=>10,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>88,
            'title'=>'Медицинская биохимия ',
            'code'=>'30.05.01',
            'department_id'=>10,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>89,
            'title'=>'Медицинская кибернетика ',
            'code'=>'30.05.03',
            'department_id'=>10,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>90,
            'title'=>'Стоматология ',
            'code'=>'31.05.03',
            'department_id'=>10,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>91,
            'title'=>'Фундаментальные математика и механика ',
            'code'=>'01.05.01',
            'department_id'=>11,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>92,
            'title'=>'Таможенное дело ',
            'code'=>'38.05.02',
            'department_id'=>15,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>93,
            'title'=>'Экономическая безопасность ',
            'code'=>'38.05.01',
            'department_id'=>15,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>94,
            'title'=>'Правовое обеспечение национальной безопасности ',
            'code'=>'40.05.01',
            'department_id'=>22,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>95,
            'title'=>'Судебная и прокурорская деятельность ',
            'code'=>'40.05.04',
            'department_id'=>22,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>96,
            'title'=>'Судебная экспертиза ',
            'code'=>'40.05.03',
            'department_id'=>22,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>97,
            'title'=>'Фундаментальная и прикладная химия ',
            'code'=>'04.05.01',
            'department_id'=>21,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>98,
            'title'=>'Психология служебной деятельности ',
            'code'=>'37.05.02',
            'department_id'=>18,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>99,
            'title'=>'Информационная безопасность телекоммуникационных систем ',
            'code'=>'10.05.02',
            'department_id'=>17,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>100,
            'title'=>'Информационная безопасность телекоммуникационных систем / Программа подготовки офицеров',
            'code'=>'10.05.02',
            'department_id'=>17,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>101,
            'title'=>'Специальные радиотехнические системы / Программа подготовки офицеров',
            'code'=>'11.05.02',
            'department_id'=>17,
            'degree_id'=>2
        ] );



        Direction::create( [
            'id'=>102,
            'title'=>'Специальное (дефектологическое) образование / Логопедия',
            'code'=>'44.03.03',
            'department_id'=>3,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>103,
            'title'=>'Педагогическое образование (с двумя профилями подготовки) / Математика и физика',
            'code'=>'44.03.05',
            'department_id'=>6,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>104,
            'title'=>'Педагогическое образование / Иностранный язык (английский)',
            'code'=>'44.03.01',
            'department_id'=>2,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>105,
            'title'=>'Педагогическое образование / Иностранный язык (немецкий)',
            'code'=>'44.03.01',
            'department_id'=>2,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>106,
            'title'=>'Педагогическое образование (с двумя профилями подготовки) / Иностранный язык (английский) и второй иностранный язык (немецкий)',
            'code'=>'44.03.05',
            'department_id'=>2,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>107,
            'title'=>'Педагогическое образование (с двумя профилями подготовки) / История и обществознание',
            'code'=>'44.03.05',
            'department_id'=>2,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>108,
            'title'=>'Педагогическое образование (с двумя профилями подготовки) / История и право',
            'code'=>'44.03.05',
            'department_id'=>2,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>109,
            'title'=>'Педагогическое образование (с двумя профилями подготовки) / Русский язык и литература',
            'code'=>'44.03.05',
            'department_id'=>2,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>110,
            'title'=>'Педагогическое образование (с двумя профилями подготовки) / Биология и химия',
            'code'=>'44.03.05',
            'department_id'=>1,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>111,
            'title'=>'Экономика / Экономика и финансы организаций (предприятий)',
            'code'=>'38.03.01',
            'department_id'=>5,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>112,
            'title'=>'Физическая культура для лиц с отклонениями в состоянии здоровья (адаптивная физическая культура) ',
            'code'=>'49.03.02',
            'department_id'=>13,
            'degree_id'=>1
        ] );



        Direction::create( [
            'id'=>113,
            'title'=>'Педагогическое образование / Приоритетные направления педагогической науки в физико-математическом образовании',
            'code'=>'44.04.01',
            'department_id'=>6,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>114,
            'title'=>'Прикладная информатика / Разработка и управление проектами в области информационных технологий',
            'code'=>'09.04.03',
            'department_id'=>6,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>115,
            'title'=>'Педагогическое образование / Естественнонаучное образование',
            'code'=>'44.04.01',
            'department_id'=>1,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>116,
            'title'=>'Педагогическое образование / Инновационные технологии начального образования',
            'code'=>'44.04.01',
            'department_id'=>4,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>117,
            'title'=>'Педагогическое образование / Менеджмент в образовании',
            'code'=>'44.04.01',
            'department_id'=>4,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>118,
            'title'=>'Биология ',
            'code'=>'06.04.01',
            'department_id'=>10,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>119,
            'title'=>'Экология и природопользование ',
            'code'=>'05.04.06',
            'department_id'=>10,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>120,
            'title'=>'Педагогическое образование / Историческое образование',
            'code'=>'44.04.01',
            'department_id'=>2,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>121,
            'title'=>'Педагогическое образование / Лингвострановедение, межкультурная коммуникация и профессиональный перевод',
            'code'=>'44.04.01',
            'department_id'=>2,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>122,
            'title'=>'Педагогическое образование / Русская словесность в современном образовательном пространстве',
            'code'=>'44.04.01',
            'department_id'=>2,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>123,
            'title'=>'Психология / Психология развития',
            'code'=>'37.04.01',
            'department_id'=>3,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>124,
            'title'=>'Психолого-педагогическое образование / Психолого-педагогическое сопровождение дошкольного образования',
            'code'=>'44.04.02',
            'department_id'=>3,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>125,
            'title'=>'Психолого-педагогическое образование / Психолого-педагогическое сопровождение образовательного процесса',
            'code'=>'44.04.02',
            'department_id'=>3,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>126,
            'title'=>'Физика ',
            'code'=>'03.04.02',
            'department_id'=>8,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>127,
            'title'=>'Журналистика ',
            'code'=>'42.04.02',
            'department_id'=>14,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>128,
            'title'=>'Филология ',
            'code'=>'45.04.01',
            'department_id'=>14,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>129,
            'title'=>'Информационные системы и технологии ',
            'code'=>'09.04.02',
            'department_id'=>20,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>130,
            'title'=>'Физика ',
            'code'=>'03.04.02',
            'department_id'=>20,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>131,
            'title'=>'Философия ',
            'code'=>'47.04.01',
            'department_id'=>20,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>132,
            'title'=>'Электроника и наноэлектроника ',
            'code'=>'11.04.04',
            'department_id'=>20,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>133,
            'title'=>'Государственное и муниципальное управление / Антикризисное управление',
            'code'=>'38.04.04',
            'department_id'=>5,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>134,
            'title'=>'Зарубежное регионоведение ',
            'code'=>'41.04.01',
            'department_id'=>12,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>135,
            'title'=>'История ',
            'code'=>'46.04.01',
            'department_id'=>12,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>136,
            'title'=>'Культурология ',
            'code'=>'51.04.01',
            'department_id'=>12,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>137,
            'title'=>'Международные отношения ',
            'code'=>'41.04.05',
            'department_id'=>12,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>138,
            'title'=>'Политология ',
            'code'=>'41.04.04',
            'department_id'=>12,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>139,
            'title'=>'Математика ',
            'code'=>'01.04.01',
            'department_id'=>11,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>140,
            'title'=>'Математика и компьютерные науки ',
            'code'=>'02.04.01',
            'department_id'=>11,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>141,
            'title'=>'Механика и математическое моделирование ',
            'code'=>'01.04.03',
            'department_id'=>11,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>142,
            'title'=>'Прикладная информатика ',
            'code'=>'09.04.03',
            'department_id'=>11,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>143,
            'title'=>'Прикладная математика и информатика ',
            'code'=>'01.04.02',
            'department_id'=>11,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>144,
            'title'=>'Программная инженерия ',
            'code'=>'09.04.04',
            'department_id'=>11,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>145,
            'title'=>'Фундаментальная информатика и информационные технологии ',
            'code'=>'02.04.02',
            'department_id'=>11,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>146,
            'title'=>'Юриспруденция ',
            'code'=>'40.04.01',
            'department_id'=>22,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>147,
            'title'=>'Бизнес-информатика ',
            'code'=>'38.04.05',
            'department_id'=>15,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>148,
            'title'=>'Государственное и муниципальное управление ',
            'code'=>'38.04.04',
            'department_id'=>15,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>149,
            'title'=>'Менеджмент ',
            'code'=>'38.04.02',
            'department_id'=>15,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>150,
            'title'=>'Прикладная информатика ',
            'code'=>'09.04.03',
            'department_id'=>15,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>151,
            'title'=>'Психология ',
            'code'=>'37.04.01',
            'department_id'=>15,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>152,
            'title'=>'Торговое дело ',
            'code'=>'38.04.06',
            'department_id'=>15,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>153,
            'title'=>'Управление персоналом ',
            'code'=>'38.04.03',
            'department_id'=>15,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>154,
            'title'=>'Финансы и кредит ',
            'code'=>'38.04.08',
            'department_id'=>15,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>155,
            'title'=>'Экономика ',
            'code'=>'38.04.01',
            'department_id'=>15,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>156,
            'title'=>'Менеджмент / Организация и управление здравоохранением',
            'code'=>'38.04.02',
            'department_id'=>18,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>157,
            'title'=>'Психология ',
            'code'=>'37.04.01',
            'department_id'=>18,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>158,
            'title'=>'Социальная работа ',
            'code'=>'39.04.02',
            'department_id'=>18,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>159,
            'title'=>'Социология ',
            'code'=>'39.04.01',
            'department_id'=>18,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>160,
            'title'=>'Управление персоналом ',
            'code'=>'38.04.03',
            'department_id'=>18,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>161,
            'title'=>'Физическая культура ',
            'code'=>'49.04.01',
            'department_id'=>19,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>162,
            'title'=>'Химия ',
            'code'=>'04.04.01',
            'department_id'=>21,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>163,
            'title'=>'Радиофизика ',
            'code'=>'03.04.03',
            'department_id'=>17,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>164,
            'title'=>'Фундаментальная информатика и информационные технологии ',
            'code'=>'02.04.02',
            'department_id'=>17,
            'degree_id'=>3
        ] );



        Direction::create( [
            'id'=>165,
            'title'=>'Документационное обеспечение управления и архивоведение / На базе 9 классов',
            'code'=>'46.02.01',
            'department_id'=>7,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>166,
            'title'=>'Документационное обеспечение управления и архивоведение / На базе 11 классов',
            'code'=>'46.02.01',
            'department_id'=>7,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>167,
            'title'=>'Компьютерные системы и комплексы / На базе 9 классов',
            'code'=>'09.02.01',
            'department_id'=>7,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>168,
            'title'=>'Компьютерные системы и комплексы / На базе 11 классов',
            'code'=>'09.02.01',
            'department_id'=>7,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>169,
            'title'=>'Тепловые электрические станции / На базе 9 классов',
            'code'=>'13.02.01',
            'department_id'=>7,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>170,
            'title'=>'Тепловые электрические станции / На базе 11 классов',
            'code'=>'13.02.01',
            'department_id'=>7,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>171,
            'title'=>'Технология машиностроения / На базе 9 классов',
            'code'=>'15.02.08',
            'department_id'=>7,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>172,
            'title'=>'Технология машиностроения / На базе 11 классов',
            'code'=>'15.02.08',
            'department_id'=>7,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>173,
            'title'=>'Экономика и бухгалтерский учет (по отраслям) / На базе 9 классов',
            'code'=>'38.02.01',
            'department_id'=>7,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>174,
            'title'=>'Экономика и бухгалтерский учет (по отраслям) / На базе 11 классов',
            'code'=>'38.02.01',
            'department_id'=>7,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>175,
            'title'=>'Электрические станции, сети и системы / На базе 9 классов',
            'code'=>'13.02.03',
            'department_id'=>7,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>176,
            'title'=>'Электрические станции, сети и системы / На базе 11 классов',
            'code'=>'13.02.03',
            'department_id'=>7,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>177,
            'title'=>'Право и организация социального обеспечения / На базе 11 классов',
            'code'=>'40.02.01',
            'department_id'=>22,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>178,
            'title'=>'Правоохранительная деятельность / На базе 11 классов',
            'code'=>'40.02.02',
            'department_id'=>22,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>179,
            'title'=>'Организация перевозок и управление на транспорте (по видам) / На базе 9 классов',
            'code'=>'23.02.01',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>180,
            'title'=>'Организация перевозок и управление на транспорте (по видам) / На базе 11 классов',
            'code'=>'23.02.01',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>181,
            'title'=>'Пожарная безопасность / На базе 9 классов',
            'code'=>'20.02.04',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>182,
            'title'=>'Пожарная безопасность / На базе 11 классов',
            'code'=>'20.02.04',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>183,
            'title'=>'Программирование в компьютерных системах / На базе 9 классов',
            'code'=>'09.02.03',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>184,
            'title'=>'Программирование в компьютерных системах / На базе 11 классов',
            'code'=>'09.02.03',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>185,
            'title'=>'Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей / На базе 9 классов',
            'code'=>'23.02.07',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>186,
            'title'=>'Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей / На базе 11 классов',
            'code'=>'23.02.07',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>187,
            'title'=>'Экономика и бухгалтерский учет (по отраслям) / На базе 9 классов',
            'code'=>'38.02.01',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>188,
            'title'=>'Экономика и бухгалтерский учет (по отраслям) / На базе 11 классов',
            'code'=>'38.02.01',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>189,
            'title'=>'Эксплуатация и ремонт сельскохозяйственной техники и оборудования / На базе 9 классов',
            'code'=>'35.02.16',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>190,
            'title'=>'Эксплуатация и ремонт сельскохозяйственной техники и оборудования / На базе 11 классов',
            'code'=>'35.02.16',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>191,
            'title'=>'Электрификация и автоматизация сельского хозяйства / На базе 9 классов',
            'code'=>'35.02.08',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>192,
            'title'=>'Электрификация и автоматизация сельского хозяйства / На базе 11 классов',
            'code'=>'35.02.08',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>193,
            'title'=>'Электрические станции, сети и системы / На базе 9 классов',
            'code'=>'13.02.03',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>194,
            'title'=>'Электрические станции, сети и системы / На базе 11 классов',
            'code'=>'13.02.03',
            'department_id'=>23,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>195,
            'title'=>'Информационные системы (по отраслям) / На базе 9 классов',
            'code'=>'09.02.04',
            'department_id'=>15,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>196,
            'title'=>'Информационные системы (по отраслям) / На базе 11 классов',
            'code'=>'09.02.04',
            'department_id'=>15,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>197,
            'title'=>'Коммерция (по отраслям) / На базе 9 классов',
            'code'=>'38.02.04',
            'department_id'=>15,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>198,
            'title'=>'Коммерция (по отраслям) / На базе 11 классов',
            'code'=>'38.02.04',
            'department_id'=>15,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>199,
            'title'=>'Право и организация социального обеспечения / На базе 9 классов',
            'code'=>'40.02.01',
            'department_id'=>15,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>200,
            'title'=>'Технология продукции общественного питания / На базе 9 классов',
            'code'=>'19.02.10',
            'department_id'=>15,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>201,
            'title'=>'Технология продукции общественного питания / На базе 11 классов',
            'code'=>'19.02.10',
            'department_id'=>15,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>202,
            'title'=>'Туризм / На базе 9 классов',
            'code'=>'43.02.10',
            'department_id'=>15,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>203,
            'title'=>'Финансы / На базе 11 классов',
            'code'=>'38.02.06',
            'department_id'=>15,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>204,
            'title'=>'Экономика и бухгалтерский учет (по отраслям) / На базе 9 классов',
            'code'=>'38.02.01',
            'department_id'=>15,
            'degree_id'=>4
        ] );



        Direction::create( [
            'id'=>205,
            'title'=>'Экономика и бухгалтерский учет (по отраслям) / На базе 11 классов',
            'code'=>'38.02.01',
            'department_id'=>15,
            'degree_id'=>4
        ] );


    }
}
