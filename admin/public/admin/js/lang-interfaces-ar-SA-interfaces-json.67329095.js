(window.webpackJsonp = window.webpackJsonp || []).push([['lang-interfaces-ar-SA-interfaces-json'], { '7be8' (e) { e.exports = JSON.parse('{"interfaces":{"2fa-secret":{"2fa-secret":"سر 2FA"},"button-group":{"button_group":"مجموعة أزرار","choices":"الخيارات","choices_comment":"أدخل أزواج قيم مفتاح JSON مع القيمة المحفوظة والنص المعروض.","theme":"سمة واجهة المستخدم","theme_comment":"ضبط واجهة المستخدم إذا كانت مدعومة","value":"قيمة","flight":"طيران","cruise":"رحلة بحرية","run":"تشغيل","bus":"حافلة","bike":"دراجة هوائية","train":"قطار","car":"سيارة","other":"غير ذلك"},"calendar":{"calendar":"التقويم","min":"أقل تاريخ","min_comment":"أقل تاريخ يمكن للمستخدم إختياره","max":"أقصى تاريخ","max_comment":"أقصى تاريخ يمكن للمستخدم إختياره","formatting":"تنسيق التاريخ","formatting_comment":"يتبع [Unicode Technical Standard](https://date-fns.org/v2.8.1/docs/format). إذا ترك فارغاً، سيتم استخدام تاريخ نسبي."},"checkboxes":{"checkboxes":"مربع الاختيار","choices":"الخيارات","choices_comment":"أدخل أزواج قيم مفتاح JSON مع القيمة المحفوظة والنص المعروض.","wrap":"اختم بمحدد","wrap_comment":"إختم القيمة المحفوظة بمحدد (يحسّن إمكانية البحث).","formatting":"إظهار عرض نص","formatting_comment":"اجعل القيم كقيم عرض","display_text":"عرض النص","value":"قيمة","option":"خيار","single":"عمود واحد","single_comment":"عرض خانات الاختيار في عمود واحد","draggable":"مربعات الاختيار القابلة للسحب","draggable_comment":"تمكين الفرز حسب خانات الاختيار القابلة للسحب","allow_other":"السماح لآخرين","allow_other_comment":"السماح بخيار إضافي مخصص"},"checkboxes-relational":{"checkboxes_relational":"علاقية خانات الاختيار","grid":"شبكة","grid_comment":"عدد العناصر المراد عرضها في صف","item_template":"قالب العنصر","item_template_comment":"كيفية عرض القيم على مخطط ذات عنصر واحد","item_template_placeholder":"{{name}} — {{first_name}}","listing_template":"قالب القائمة","listing_template_comment":"كيفية عرض القيم في مخططات القائمة.<br>ستحتاج إلى إلحاق اسم المجموعة مسبقاً","listing_template_placeholder":"{{movie.name}} — {{member.first_name}}"},"code":{"code":"نص برمجي","template":"قالب","template_comment":"توفير قالب يمكن للمستخدم استخدامه للبدء به","language":"لغة","language_comment":"تعيين لغة البرمجة لاستخدامها","lineNumber":"أرقام الأسطر","lineNumber_comment":"إظهار أرقام الأسطر","loc":"لا يوجد سطر من {lang} | سطر واحد من {lang} | {count} سطر من {lang}","fill_template":"ملء بقالب"},"collections":{"collections":"مجموعات","placeholder":"مكان محجوز","placeholder_comment":"النص الثابت الذي يظهر قبل تحديد القيمة","placeholder_default":"اختيار مجموعة...","option":"خيار","include_system":"تضمين النظام","include_system_comment":"تضمين مجموعات النظام في الخيارات"},"color":{"color":"لون","format":"صيغة المخرجات","format_comment":"في أي صيغة بيانات تحفظ القيمة","palette":"لوحة الألوان","palette_comment":"إضافة خيارات اللون كقيم hex","palette_only":"اللوحة فقط","palette_only_comment":"السماح للمستخدم بالاختيار فقط من اللوحة"},"color-palette":{"color-picker":"إختيار اللون"},"date":{"date":"التاريخ","min":"أدنى تاريخ","min_comment":"أقل تاريخ يمكن للمستخدم إختياره","max":"أقصى تاريخ","max_comment":"أقصى تاريخ يمكن للمستخدم إختياره","localized":"مترجم","localized_comment":"إظهار التاريخ المترجم في النتيجة","relative":"إظهار التواريخ النسبية","relative_comment":"إظهار التاريخ نسبياً (على سبيل المثال قبل يومين)","icon_left":"أيقونة اليسار","icon_left_comment":"اختر أيقونة اختيارية لعرضها على يسار الحقل","icon_right":"أيقونة اليمين","icon_right_comment":"اختر أيقونة اختيارية لعرضها على يسار الحقل"},"datetime":{"datetime":"التاريخ والوقت","min":"الحد الأدنى للوقت","min_comment":"الحد الأدنى للوقت الذي يمكن اختياره من قبل المستخدم","max":"الحد الأقصى للوقت","max_comment":"الحد الأقصى للوقت الذي يمكن اختياره من قبل المستخدم","localized":"مترجم","localized_comment":"إظهار التاريخ المترجم في النتيجة","relative":"إظهار الوقت النسبي","relative_comment":"إظهار الوقت نسبياً (على سبيل المثال قبل 50 دقيقة)","icon_left":"أيقونة اليسار","icon_left_comment":"اختر أيقونة اختيارية لعرضها على يسار الحقل","icon_right":"أيقونة اليمين","icon_right_comment":"اختر أيقونة اختيارية لعرضها على يسار الحقل","utc":"حفظ كترميز UTC","utc_comment":"حفظ وعرض من ترميز UTC","default_to_current_datetime":"افتراضياً التاريخ والوقت الحالي","default_to_current_datetime_comment":"ضع القيمة الافتراضية إلى التاريخ والوقت الحاليين","format":"التنسيق","format_comment":"تنسيق التاريخ والوقت لاستخدامه للحقل"},"datetime-created":{"datetime_created":"تاريخ ووقت الإنشاء","relative":"إظهار الوقت النسبي","relative_comment":"إظهار الوقت نسبياً (على سبيل المثال قبل 50 دقيقة)","now":"أنت تقوم بإنشاء هذا الآن","unknown":"مجهول"},"datetime-updated":{"datetime_updated":"تحديث التاريخ والوقت","relative":"إظهار الوقت النسبي","relative_comment":"إظهار الوقت نسبياً (على سبيل المثال قبل 50 دقيقة)","now":"أنت تقوم بإنشاء هذا الآن","unknown":"مجهول"},"divider":{"divider":"الفاصل","style-name":"نمط الفاصل","style-comment":"تغيير نمط الفاصل","weight-name":"سمك الخط","weight-comment":"تغيير سماكة الخط","input-name":"نص الفاصل","input-comment":"اكتب نصك هنا","desc-name":"وصف الفاصل","desc-comment":"أضف هنا وصفاً","hr-name":"شؤون الموظفين","hr-comment":"عرض قاعدة أفقية؟","margin-name":"زيادة الهامش","margin-comment":"إضافة هامش فوق الواجهة"},"dropdown":{"dropdown":"قائمة منسدلة","choices":"الخيارات","choices_comment":"أدخل أزواج قيم مفتاح JSON مع القيمة المحفوظة والنص المعروض.","placeholder":"مكان محجوز","placeholder_comment":"النص الثابت الذي يظهر قبل تحديد القيمة","option":"خيار","formatting":"إظهار عرض نص","formatting_comment":"اجعل القيم كقيم عرض","placeholder_default":"اختر خيار...","icon":"أيقونة","icon_comment":"اختر أيقونة اختيارية لعرضها على يسار الحقل","options_invalid":"خيار JSON للقائمة المنسدلة غير صالح:","allow_other":"السماح لآخرين","allow_other_comment":"السماح للمستخدم بإضافة قيمة خاصة به"},"file":{"file":"ملف","view_type":"نوع العرض","view_type_comment":"حدد الطريقة التي تريد بها عرض الملفات","view_options":"عرض الخيارات","view_options_comment":"تعيين خيارات العرض لاستخدامها في الملفات","view_query":"عرض الاستعلام","view_query_comment":"تعيين خيارات العرض لاستخدامها لهذي الملفات","filters":"تصفية","filters_comment":"ما التصفيات التي ستستخدم","accept":"تقبل أنواع الملفات","accept_comment":"تعيين قائمة بأنواع MIME التي يمكن اختيارها","allow_delete":"السماح بالحذف","allow_delete_comment":"يسمح للمستخدم بحذف الملف ذي الصلة نهائيا من خلال واجهة الملف","crop_preview":"معاينة حاصل ملف","crop_preview_comment":"يقسم معاينة الملف لملء المساحة المتاحة."},"file-preview":{"file_preview":"معاينة ملف","edit":"خيارات التعديل"},"file-size":{"file_size":"حجم الملف","placeholder":"مكان محجوز","placeholder_comment":"أدخل نص النائب","format":"صيغة القيمة","format_comment":"إظهار القيمة بطريقة مقروءة للبشر (كـ 10 ميغابايت)","format_input":"صيغة إدخال","format_input_comment":"أدخل القيمة باستخدام القائمة المنسدلة للوحدات","decimal":"عشري","decimal_comment":"إظهار القيمة في العد العشري (10MB مقابل 10MiB)","crop_preview":"قص صور المعاينة"},"files":{"files":"الملفات","visible_columns":"الأعمدة المرئية","visible_columns_comment":"إضافة CSV من الأعمدة التي تريد عرضها كمعاينة","preferences":"تفضيلات عرض القائمة","preferences_comment":"تعيين خيارات العرض لاستخدامها في العارض","relation_not_setup":"لم يتم إعداد العلاقة بشكل صحيح","template":"عرض القالب","template_comment":"اختر كيفية عرض القيم على مخططات العنصر","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"السماح بإنشاء","allow_create_comment":"السماح للمستخدم بإنشاء عنصر جديد من هذه الواجهة","allow_select":"السماح باختيار","allow_select_comment":"السماح للمستخدم باختيار عنصر موجود","accept":"تقبل أنواع الملفات","accept_comment":"تعيين قائمة بأنواع MIME التي يمكن اختيارها","edit_item":"تعديل"},"hashed":{"hashed":"مشفر","hide":"إخفاء القيمة","hide_comment":"عرض النقاط بدلاً من الأحرف التي تدخلها","placeholder":"مكان محجوز","placeholder_comment":"أدخل نص النائب","show_hash":"إظهار النتيجة المشفرة","show_hash_comment":"عرض التشفير المحفوظ","hashing_type":"نوع التشفير","hashing_type_comment":"ماهي طريقة التشفير للاستخدام","width":"حجم","width_comment":"تعيين العرض الذي سيتم استخدامه الحقل","auto":"تلقائي","small":"صغير","medium":"متوسط","large":"كبير","secured":"القيمة المؤمنة"},"icon":{"icon":"أيقونة","search_placeholder":"البحث عن أيقونة..."},"interface-options":{"interface-options":"خيارات الواجهة","interface-field":"حقل الواجهة","placeholder-comment":"الحقل الذي يحمل اسم الواجهة","placeholder-default":"أدخل اسم الحقل..."},"interface-types":{"interface-types":"أنواع الواجهات","interface-field":"حقل الواجهة","placeholder-comment":"الحقل الذي يحمل اسم الواجهة","placeholder-default":"أدخل اسم الحقل..."},"interfaces":{"interfaces":"واجهات","placeholder":"مكان محجوز","placeholder_comment":"النص الثابت الذي يظهر قبل تحديد القيمة","placeholder_default":"اختر واجهة","option":"خيار","relational":"تضمين واجهات العلاقات","include_status":"تضمين واجهة الحالة"},"json":{"template":"قالب","template_comment":"توفير قالب يمكن للمستخدم استخدامه للبدء به"},"key-value":{"key_interface":"عنوان الواجهة","key_data_type":"عنوان نوع البيانات","key_options":"خيارات واجهة العنوان","value_interface":"عنوان الواجهة","value_data_type":"عنوان نوع البيانات","value_options":"خيارات واجهة العنوان"},"language":{"input":"لغة","select_language":"اختر اللغة...","limit":"الحد إلى توافر Directus","limit_comment":"إظهار فقط اللغات المتاحة كترجمات في Directus"},"many-to-many":{"m2m":"العديد للكثيرين","visible_columns":"الأعمدة المرئية","visible_columns_comment":"إضافة CSV من الأعمدة التي تريد عرضها كمعاينة","preferences":"تفضيلات عرض القائمة","preferences_comment":"تعيين خيارات العرض لاستخدامها في العارض","relation_not_setup":"لم يتم إعداد العلاقة بشكل صحيح","template":"عرض القالب","template_comment":"اختر كيفية عرض القيم على مخططات العنصر","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"السماح بإنشاء","allow_create_comment":"السماح للمستخدم بإنشاء عنصر جديد من هذه الواجهة","allow_select":"السماح باختيار","allow_select_comment":"السماح للمستخدم باختيار عنصر موجود"},"many-to-one":{"m2o":"العديد إلى واحد","template":"قالب المنسدلة","template_comment":"كيفية تنسيق خيارات القائمة المنسدلة","visible_fields":"حقول قابلة للكتابة","visible_fields_placeholder":"العنوان، المؤلف","visible_fields_note":"CSV للحقول مرئية عند تحديد عنصر في النمط","template_placeholder":"{{title}} —{{author}}","placeholder":"مكان محجوز","placeholder_comment":"أدخل نص النائب","preferences":"تفضيلات عرض القائمة","preferences_comment":"تعيين خيارات العرض لاستخدامها في العارض","relationship_not_setup":"لم يتم إعداد العلاقة بشكل صحيح","icon":"أيقونة","icon_comment":"اختر أيقونة اختيارية لعرضها على يسار الحقل","select_one":"اختر واحدة","threshold":"عتبة","threshold_comment":"عدد العناصر التي سيتم بعدها استخدام طريقة بدلاً من القائمة المنسدلة"},"map":{"map":"الخريطة","choices":"الخيارات","choices_comment":"أدخل أزواج قيم مفتاح JSON مع القيمة المحفوظة والنص المعروض.","theme":"سمة واجهة المستخدم","theme_comment":"ضبط واجهة المستخدم إذا كانت مدعومة","value":"قيمة","map_lat":"خط العرض الإفتراضي","map_lat_comment":"الخريطة سوف تتمركز في الوسط","map_lng":"خط العرض الإفتراضي","map_lng_comment":"الخريطة سوف تتمركز في الوسط","height":"الارتفاع","default_zoom":"التكبير الافتراضي","default_zoom_comment":"مستوى التكبير الافتراضي للخريطة","max_zoom":"الحد الأقصى للتكبير","max_zoom_comment":"التكبير الأقصى المسموح به في الخريطة","no_location":"لم يتم العثور على موقع","user_location_error_blocked":"لقد قمت بتعطيل الوصول إلى الموقع. يرجى تمكينه من شريط عناوين المتصفح للكشف التلقائي عن موقعك.","user_location_error":"حدث خطأ أثناء محاولة الحصول على موقعك. الرجاء المحاولة مرة أخرى.","address_to_code":"إدخال العنوان","address_to_code_comment":"إضافة حقل إدخال للحصول على الرموز الجغرافية تلقائياً من عنوان. يستخدم <a href=\\"https://wiki.openstreetmap.org/wiki/Nominatim\\">Nominatim</a>. الرجاء التحقق من سياسة الاستخدام الخاصة بهم.","address_to_code_error":"لم يتم العثور على كود جغرافي لهذا العنوان","clear_location":"مسح الموقع","my_location":"تعيين موقعي","address_location":"تعيين موقع العنوان"},"markdown":{"markdown":"Markdown","edit":"تعديل","preview":"معاينة","tabbed_preview":"معاينة التبويب","tabbed_preview_comment":"كيفية عرض المحرر والمعاينة","tabbed_preview_on":"معاينة التبويب","tabbed_preview_off":"معاينة جانبية","rows":"الصفوف","rows_comment":"رقم البداية للصفوف النصية المتاحة","placeholder":"مكان محجوز","placeholder_comment":"أدخل نص النائب"},"multiselect":{"multiselect":"إختيار متعدد","choices":"الخيارات","choices_comment":"أدخل أزواج قيم مفتاح JSON مع القيمة المحفوظة والنص المعروض.","placeholder":"مكان محجوز","placeholder_comment":"أدخل نص النائب","size":"حجم","size_comment":"عدد الخيارات المرئية قبل التمرير","option":"خيار","wrap":"اختم بمحدد","wrap_comment":"تخطي القيم مع زوج من المحددات للسماح بالبحث الدقيق عن قيمة واحدة","format":"تنسيق التصفح","format_comment":"تنسيق الإخراج على صفحة عناصر المتصفح"},"numeric":{"numeric":"رقمي","placeholder":"مكان محجوز","placeholder_comment":"أدخل نص النائب","localized":"مترجم","localized_comment":"تعريب الإخراج إلى اللغة المحلية للمستخدم","icon_left":"أيقونة اليسار","icon_left_comment":"اختر أيقونة اختيارية لعرضها على يسار الحقل","icon_right":"أيقونة اليمين","icon_right_comment":"اختر أيقونة اختيارية لعرضها على يسار الحقل","monospace":"Monospace","monospace_comment":"استخدام خط Monospace"},"one-to-many":{"o2m":"واحد للكثيرين","select_items":"حدد العناصر","relation_not_setup":"لم يتم إعداد العلاقة بشكل صحيح","visible_columns":"الأعمدة المرئية","visible_columns_comment":"إضافة CSV من الأعمدة التي تريد عرضها كمعاينة","preferences":"تفضيلات عرض القائمة","preferences_comment":"تعيين خيارات العرض لاستخدامها في العارض","template":"عرض القالب","template_comment":"كيفية تنسيق القيمة على عرض تصفح العنصر","template_placeholder":"{{title}} —{{author}}","allow_create":"السماح بإنشاء","allow_create_comment":"السماح للمستخدم بإنشاء عنصر جديد من هذه الواجهة","allow_select":"السماح باختيار","allow_select_comment":"السماح للمستخدم باختيار عنصر موجود","delete_mode":"وضع الحذف","delete_mode_comment":"ماذا نفعل عندما يلغي المستخدم اختيار عنصر","sort_field":"فرز الحقل","sort_field_comment":"الحقل المراد تخزين قيمة الترتيب في"},"password":{"password":"كلمة المرور","hide":"إخفاء القيمة","hide_comment":"عرض النقاط بدلاً من الأحرف التي تدخلها","placeholder":"مكان محجوز","placeholder_comment":"أدخل نص النائب","confirm_placeholder":"تأكيد كلمة المرور...","show_hash":"إظهار النتيجة المشفرة","show_hash_comment":"عرض التشفير المحفوظ","hashing_type":"نوع التشفير","hashing_type_comment":"ماهي طريقة التشفير للاستخدام"},"preview":{"preview":"معاينة","url_template":"قالب URL","url_template_comment":"قالب mustache لعنوان URL لمعاينة المحتوى","preview_item":"معاينة هذا العنصر"},"primary-key":{"primary_key":"المفتاح الرئيسي","immutable":"لا يمكن تغييرها","monospace":"Monospace","monospace_comment":"استخدام خط Monospace"},"radio-buttons":{"radio":"أزرار الراديو","choices":"الخيارات","choices_comment":"أدخل أزواج قيم مفتاح JSON مع القيمة المحفوظة والنص المعروض.","option":"خيار","format":"تنسيق التصفح","format_comment":"تنسيق الإخراج على صفحة عناصر المتصفح"},"rating":{"rating":"التقييم","value":"قيمة","active_color":"اللون الحالي","active_color_comment":"اللون الحالي للنجوم المحددة","max_stars":"الحد الأقصى للنجوم","max_stars_comment":"عدد التقييمات القصوى المسموح بها","display":"عرض","display_comment":"كيفية عرض قيم التقييم"},"repeater":{"repeater":"كرر","template":"عرض القالب","template_comment":"كيفية تنسيق القيمة على عرض تصفح العنصر","template_placeholder":"{{title}} — ({{author}})","fields":"حقول","fields_comment":"ما الحقول التي ستظهر في كل صف متكرر","limit":"Limit","limit_comment":"Maximum amount of rows the user can add","duplicable":"Duplicable rows","duplicable_comment":"Whether to make rows duplicable or not","structure":"Structure","structure_comment":"Whether to save the JSON as an array of objects or single object with unique keys","structure_key":"Structure Key Field","structure_key_comment":"When using an object for the JSON structure, this value controls what field to use for the key values","placeholder":"مكان محجوز","placeholder_comment":"The value that shows up instead of the template if there\'s no value entered yet","create_item_text":"Create Item Text","create_item_text_comment":"Text that\'s displayed in the button that adds a new row to the repeater"},"slider":{"slider":"Slider","min":"Minimum","min_comment":"The minimum valid value","max":"Maximum","max_comment":"The maximum valid value","step":"Step","step_comment":"Increments at which the value can be set","unit":"Unit","unit_comment":"Show an unit next to the slider value, e.g. 15 Pounds"},"slug":{"slug":"Slug","placeholder_name":"مكان محجوز","placeholder_comment":"The placeholder text to show","force_lowercase":"Force Lowercase","force_lowercase_comment":"Makes sure the slug is in lowercase","mirrored_field":"Mirrored Field","mirrored_field_comment":"Keep the slug up to date with another (text) field","only_on_create":"Only on Create","only_on_create_comment":"Allow the slug to be edited only when creating a new item"},"sort":{"sort":"رتب"},"status":{"status":"حالة","status_mapping":"Status Mapping","status_mapping_comment":"Enter JSON status options","simple_badge":"Simple Badge","simple_badge_comment":"Displays a colored dot on the item listing page.","published":"Published","under_review":"Under Review","draft":"Draft","deleted":"Deleted"},"tags":{"tags":"الوسوم","alphabetize":"Alphabetize tags","alphabetize_comment":"Will rearrange tags to be alphabetical","lowercase":"Force Lowercase","lowercase_comment":"Convert all tags to lowercase","wrap":"Wrap with delimiter","wrap_comment":"تخطي القيم مع زوج من المحددات للسماح بالبحث الدقيق عن قيمة واحدة","format":"Format Value","format_comment":"Convert the tags to Title Case when displaying the value","sanitize":"Sanitize","sanitize_comment":"Removes any non-alphanumeric characters and converts spaces to hyphens","placeholder_text":"اكتب tag ثم اضغط على إدخال أو فاصلة...","icon_left":"أيقونة اليسار","icon_left_comment":"اختر أيقونة اختيارية لعرضها على يسار الحقل","icon_right":"أيقونة اليمين","icon_right_comment":"اختر أيقونة اختيارية لعرضها على يسار الحقل","validation":"التحقق من صحة","validation_comment":"RegEx للتحقق من كل قيمة فردية مقابل","validation_message":"رسالة التحقق","validation_message_comment":"رسالة قصيرة لإظهار المستخدمين في حالة فشل التحقق من صحة tag","validation_message_default":"الرجاء إدخال tag صالحة"},"text-input":{"input":"Text Input","placeholder":"مكان محجوز","trim":"تقليم","trim_comment":"تقليم المحيط بالفضاء الأبيض من القيمة قبل الحفظ","char_count":"إظهار عدد الأحرف","char_count_comment":"إظهار الحروف المتبقية المتاحة","icon_left":"أيقونة اليسار","icon_left_comment":"اختر أيقونة اختيارية لعرضها على يسار الحقل","icon_right":"أيقونة اليمين","icon_right_comment":"اختر أيقونة اختيارية لعرضها على يسار الحقل","format":"Pretty Output","format_comment":"Convert the value to title case","monospace":"Monospace","monospace_comment":"استخدام خط Monospace","auto":"تلقائي","small":"صغير","medium":"متوسط","large":"كبير"},"textarea":{"textarea":"Text-Area","rows":"الصفوف","rows_comment":"The number of text rows available for the input before scrolling","placeholder":"مكان محجوز","placeholder_comment":"أدخل نص النائب","serif":"Serif Font","serif_comment":"Use a larger, serif typeface"},"time":{"time":"Time","include_seconds":"Include seconds","include_seconds_comment":"Include seconds in the interface","24hour":"Display 24 hour clock","24hour_comment":"Show the time in 24-hour format (eg.: 15:30)"},"switch":{"switch":"Switch","label_on":"Label (On)","label_on_comment":"Label to show next to the toggle when the toggle is on","label_off":"Label (Off)","label_off_comment":"Label to show next to the toggle when the toggle is off","checkbox":"Show as Checkbox","checkbox_comment":"Display a checkbox instead of the default switch"},"toggle-icon":{"toggle-icon":"Toggle Icon","text-inactive-name":"Inactive Text","text-inactive-comment":"Text next to the inactive icon","text-inactive-placeholder":"Enter your text here","icon-inactive-name":"Inactive Icon","icon-inactive-comment":"Choose an inactive icon","color-inactive-name":"Inactive Color","color-inactive-comment":"Choose the inactive color","text-active-name":"Active Text","text-active-comment":"Text next to the active icon","text-active-placeholder":"Enter your text here","icon-active-name":"Active Icon","icon-active-comment":"Choose an active icon","color-active-name":"اللون الحالي","color-active-comment":"Choose the active color"},"translation":{"translation":"الترجمة","language_field":"Language Field","language_field_comment":"The field that holds the language code in the related collection","languages":"Languages","template":"عرض القالب","template_comment":"اختر كيفية عرض القيم على مخططات العنصر","template_placeholder":"{{title}} — {{body}}"},"user":{"user":"User","avatar":"الصورةالرمزية","name":"الاسم","template":"قالب","template_comment":"How to format the users in the dropdown","placeholder":"مكان محجوز","placeholder_comment":"Add a placeholder"},"owner":{"owner":"المالك","avatar":"الصورةالرمزية","name":"الاسم","template":"قالب","template_comment":"How to display the user on the item detail page","display":"عرض","display_comment":"How to display the user on the item browse page","you":"You will be the creator","unknown":"مجهول"},"user-roles":{"user-roles":"User Role","choose_role":"Choose a role...","relational":"مرتبطة","relational_comment":"Save as a relational record","show_public":"Show public role"},"user-updated":{"user_updated":"User Updated","avatar":"الصورةالرمزية","name":"الاسم","template":"قالب","template_comment":"How to display the user on the item detail page","display":"عرض","display_comment":"How to display the user on the item browse page","you":"You will be the updater","unknown":"مجهول"},"wysiwyg":{"toolbar":"Toolbar Options","toolbar_comment":"Show, hide, and reorder toolbar options","custom_formats":"Custom Formats","custom_formats_comment":"Custom HTML wrappers for content","tinymce_options":"TinyMCE Options","tinymce_options_comment":"Override any of [the TinyMCE init options](https://www.tiny.cloud/docs/configure/)."}}}') } }])
// # sourceMappingURL=lang-interfaces-ar-SA-interfaces-json.67329095.js.map
