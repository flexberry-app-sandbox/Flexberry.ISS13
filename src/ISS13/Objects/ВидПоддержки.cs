﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ISS13
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Вид поддержки.
    /// </summary>
    // *** Start programmer edit section *** (ВидПоддержки CustomAttributes)

    // *** End programmer edit section *** (ВидПоддержки CustomAttributes)
    [AutoAltered()]
    [Caption("Вид поддержки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ВидПоддержкиE", new string[] {
            "Наименование as \'Наименование\'",
            "Описание as \'Описание\'",
            "Условие as \'Условие\'",
            "Условие.Наименование as \'Наименование\'",
            "Пользователь as \'Пользователь\'",
            "Пользователь.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Условие.Наименование",
            "Пользователь.ФИО"})]
    [MasterViewDefineAttribute("ВидПоддержкиE", "Условие", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("ВидПоддержкиE", "Пользователь", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ВидПоддержкиL", new string[] {
            "Наименование as \'Наименование\'",
            "Описание as \'Описание\'",
            "Условие.Наименование as \'Наименование\'",
            "Пользователь.ФИО as \'ФИО\'"})]
    public class ВидПоддержки : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private string fОписание;
        
        private IIS.ISS13.Пользователь fПользователь;
        
        private IIS.ISS13.Условие fУсловие;
        
        // *** Start programmer edit section *** (ВидПоддержки CustomMembers)

        // *** End programmer edit section *** (ВидПоддержки CustomMembers)

        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (ВидПоддержки.Наименование CustomAttributes)

        // *** End programmer edit section *** (ВидПоддержки.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (ВидПоддержки.Наименование Get start)

                // *** End programmer edit section *** (ВидПоддержки.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (ВидПоддержки.Наименование Get end)

                // *** End programmer edit section *** (ВидПоддержки.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВидПоддержки.Наименование Set start)

                // *** End programmer edit section *** (ВидПоддержки.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (ВидПоддержки.Наименование Set end)

                // *** End programmer edit section *** (ВидПоддержки.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Описание.
        /// </summary>
        // *** Start programmer edit section *** (ВидПоддержки.Описание CustomAttributes)

        // *** End programmer edit section *** (ВидПоддержки.Описание CustomAttributes)
        [StrLen(255)]
        public virtual string Описание
        {
            get
            {
                // *** Start programmer edit section *** (ВидПоддержки.Описание Get start)

                // *** End programmer edit section *** (ВидПоддержки.Описание Get start)
                string result = this.fОписание;
                // *** Start programmer edit section *** (ВидПоддержки.Описание Get end)

                // *** End programmer edit section *** (ВидПоддержки.Описание Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВидПоддержки.Описание Set start)

                // *** End programmer edit section *** (ВидПоддержки.Описание Set start)
                this.fОписание = value;
                // *** Start programmer edit section *** (ВидПоддержки.Описание Set end)

                // *** End programmer edit section *** (ВидПоддержки.Описание Set end)
            }
        }
        
        /// <summary>
        /// Вид поддержки.
        /// </summary>
        // *** Start programmer edit section *** (ВидПоддержки.Пользователь CustomAttributes)

        // *** End programmer edit section *** (ВидПоддержки.Пользователь CustomAttributes)
        [NotNull()]
        public virtual IIS.ISS13.Пользователь Пользователь
        {
            get
            {
                // *** Start programmer edit section *** (ВидПоддержки.Пользователь Get start)

                // *** End programmer edit section *** (ВидПоддержки.Пользователь Get start)
                IIS.ISS13.Пользователь result = this.fПользователь;
                // *** Start programmer edit section *** (ВидПоддержки.Пользователь Get end)

                // *** End programmer edit section *** (ВидПоддержки.Пользователь Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВидПоддержки.Пользователь Set start)

                // *** End programmer edit section *** (ВидПоддержки.Пользователь Set start)
                this.fПользователь = value;
                // *** Start programmer edit section *** (ВидПоддержки.Пользователь Set end)

                // *** End programmer edit section *** (ВидПоддержки.Пользователь Set end)
            }
        }
        
        /// <summary>
        /// Вид поддержки.
        /// </summary>
        // *** Start programmer edit section *** (ВидПоддержки.Условие CustomAttributes)

        // *** End programmer edit section *** (ВидПоддержки.Условие CustomAttributes)
        [NotNull()]
        public virtual IIS.ISS13.Условие Условие
        {
            get
            {
                // *** Start programmer edit section *** (ВидПоддержки.Условие Get start)

                // *** End programmer edit section *** (ВидПоддержки.Условие Get start)
                IIS.ISS13.Условие result = this.fУсловие;
                // *** Start programmer edit section *** (ВидПоддержки.Условие Get end)

                // *** End programmer edit section *** (ВидПоддержки.Условие Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ВидПоддержки.Условие Set start)

                // *** End programmer edit section *** (ВидПоддержки.Условие Set start)
                this.fУсловие = value;
                // *** Start programmer edit section *** (ВидПоддержки.Условие Set end)

                // *** End programmer edit section *** (ВидПоддержки.Условие Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ВидПоддержкиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВидПоддержкиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВидПоддержкиE", typeof(IIS.ISS13.ВидПоддержки));
                }
            }
            
            /// <summary>
            /// "ВидПоддержкиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВидПоддержкиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВидПоддержкиL", typeof(IIS.ISS13.ВидПоддержки));
                }
            }
        }
    }
}
